#!/usr/bin/env node
/**
 * contentManifestPlugin.js
 *
 * Standalone script (not a bundler plugin) that recursively scans the
 * current working directory and writes a JSON manifest (manifest.json)
 * describing every file found. Useful for building routes, a sidebar
 * tree, or a search index from a static folder of content.
 *
 * Usage:
 *   node contentManifestPlugin.js
 *
 * Excludes (by name, matched at any depth):
 *   - contentManifestPlugin.js
 *   - manifest.json
 *   - .git
 *   - .obsidian
 *
 * IDs:
 *   Each entry gets a stable numeric "id". If a manifest.json already
 *   exists in the root directory, any file whose "path" matches an
 *   entry in the old manifest keeps that same id. Any new file (path
 *   not found in the old manifest) is assigned a fresh id, continuing
 *   upward from the highest id seen in the old manifest (highest + 1,
 *   highest + 2, ...).
 */

const fs = require('fs')
const path = require('path')

const rootDir = process.cwd()
const manifestPath = path.join(rootDir, 'manifest.json')

// Names to exclude entirely (files or directories), matched by basename.
const EXCLUDES = new Set([
  'contentManifestPlugin.js',
  'manifest.json',
  '.git',
  '.obsidian',
])

function isExcluded(name) {
  return EXCLUDES.has(name)
}

// Reads the previous manifest.json (if any) and returns:
//   - idByPath: Map of path -> existing numeric id
//   - maxId: highest id found (0 if none / file absent / empty)
function loadPreviousManifest(manifestFile) {
  const idByPath = new Map()
  let maxId = 0

  if (!fs.existsSync(manifestFile)) {
    return { idByPath, maxId }
  }

  let previous
  try {
    previous = JSON.parse(fs.readFileSync(manifestFile, 'utf8'))
  } catch (err) {
    console.warn(`Warning: could not parse existing ${path.basename(manifestFile)} (${err.message}). Starting IDs fresh.`)
    return { idByPath, maxId }
  }

  if (!Array.isArray(previous)) {
    console.warn(`Warning: existing ${path.basename(manifestFile)} is not an array. Starting IDs fresh.`)
    return { idByPath, maxId }
  }

  for (const entry of previous) {
    if (!entry || typeof entry.path !== 'string' || typeof entry.id !== 'number') continue
    if (!Number.isFinite(entry.id)) continue

    // Guard against duplicate paths in the old manifest: keep the first id seen.
    if (!idByPath.has(entry.path)) {
      idByPath.set(entry.path, entry.id)
    }
    if (entry.id > maxId) {
      maxId = entry.id
    }
  }

  return { idByPath, maxId }
}

// idState = { idByPath: Map<path, id>, nextId: number } — nextId is mutated
// (via idState.nextId++) as new files are discovered during the walk.
function walk(dir, base = '', idState) {
  let entries = []
  if (!fs.existsSync(dir)) return entries
  const items = fs.readdirSync(dir, { withFileTypes: true })

  for (const item of items) {
    if (isExcluded(item.name)) continue

    const relPath = base ? `${base}/${item.name}` : item.name

    if (item.isDirectory()) {
      entries = entries.concat(walk(path.join(dir, item.name), relPath, idState))
    } else if (item.isFile()) {
      const ext = path.extname(item.name).slice(1).toLowerCase()

      let id
      if (idState && idState.idByPath.has(relPath)) {
        id = idState.idByPath.get(relPath)
      } else if (idState) {
        id = idState.nextId++
      }

      entries.push({
        id,
        path: relPath,
        name: item.name,
        ext,
      })
    }
    // symlinks and other special entries are skipped silently
  }

  return entries
}

function generate() {
  const { idByPath, maxId } = loadPreviousManifest(manifestPath)
  const idState = { idByPath, nextId: maxId + 1 }

  const files = walk(rootDir, '', idState)

  fs.writeFileSync(manifestPath, JSON.stringify(files, null, 2))

  const newCount = files.filter(f => !idByPath.has(f.path)).length
  console.log(`Wrote ${files.length} file entries to ${path.relative(rootDir, manifestPath)} (${newCount} new id${newCount === 1 ? '' : 's'} assigned)`)
}

generate()

module.exports = { generate, walk }
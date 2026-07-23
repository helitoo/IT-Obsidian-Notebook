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

function walk(dir, base = '') {
  let entries = []
  if (!fs.existsSync(dir)) return entries
  const items = fs.readdirSync(dir, { withFileTypes: true })

  for (const item of items) {
    if (isExcluded(item.name)) continue

    const relPath = base ? `${base}/${item.name}` : item.name

    if (item.isDirectory()) {
      entries = entries.concat(walk(path.join(dir, item.name), relPath))
    } else if (item.isFile()) {
      const ext = path.extname(item.name).slice(1).toLowerCase()
      entries.push({
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
  const files = walk(rootDir)
  fs.writeFileSync(manifestPath, JSON.stringify(files, null, 2))
  console.log(`Wrote ${files.length} file entries to ${path.relative(rootDir, manifestPath)}`)
}

generate()

module.exports = { generate, walk }

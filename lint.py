from pathlib import Path
import re

vault = Path(".")

for md in vault.rglob("*.md"):
    text = md.read_text(encoding="utf-8")

    # Xóa frontmatter YAML ở đầu file nếu có
    text = re.sub(
        r"^---\s*\n.*?\n---\s*\n?",
        "",
        text,
        flags=re.DOTALL,
    )

    # Xóa các dòng trống đầu file
    text = text.lstrip("\r\n")

    md.write_text(text, encoding="utf-8")

print("Done.")
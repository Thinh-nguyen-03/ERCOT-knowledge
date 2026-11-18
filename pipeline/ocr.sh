#!/usr/bin/env bash
# Some PDFs (the IMM reports) embed table fonts that come out garbled in normal text extraction.
# This reads each page as an image instead and writes sources/text/<id>.ocr.txt, which the verifier
# accepts as a second copy of that source. OCR can misread digits: quotes taken from an .ocr.txt file
# should say "(OCR)" in their locator and be spot-checked against the PDF page.
#   bash pipeline/ocr.sh imm-som-2025 [more ids]     (needs pdftoppm and tesseract)
set -euo pipefail
cd "$(dirname "$0")/.."
for id in "$@"; do
  pdf="sources/raw/$id.pdf"; tmp=$(mktemp -d); out="sources/text/$id.ocr.txt"
  pdftoppm -r 200 -png "$pdf" "$tmp/p"
  ls "$tmp"/p-*.png | sort | xargs -P 4 -I{} sh -c 'tesseract "$1" "${1%.png}" --psm 6 >/dev/null 2>&1' _ {}
  : > "$out"
  for f in $(ls "$tmp"/p-*.txt | sort); do n=$(basename "$f" .txt | sed 's/p-0*//'); printf '\n===== page %s (OCR) =====\n' "$n" >> "$out"; cat "$f" >> "$out"; done
  rm -rf "$tmp"; echo "ocr $id -> $out ($(wc -c < "$out") chars)"
done

#!/bin/bash
set -e

DIR="public/files/newsletters"
BASE="https://web.archive.org/web"

download() {
  local url=$1 out=$2
  local name=$(basename "$out")
  echo "  -> ${name}"
  curl -4 -sS --connect-timeout 15 --retry 1 -o "$out" "$url"
  local sz=$(wc -c < "$out" | tr -d ' ')
  if file -b "$out" | grep -qi "PDF"; then
    echo "    OK  ${sz}B"
  else
    echo "    FAIL (${sz}B)"
  fi
}

echo "Downloading newsletter PDFs..."
echo ""

# CDX-confirmed as application/pdf
download "${BASE}/20250507062209im_/http://civicsocietygy.co.uk/wp-content/uploads/2017/10/Civic-Society-Newsletter-1.pdf"    "${DIR}/Civic-Society-Newsletter-01.pdf"
download "${BASE}/20200920161923im_/http://civicsocietygy.co.uk/wp-content/uploads/2020/06/Civic-Society-Newsletter-14.pdf"   "${DIR}/Civic-Society-Newsletter-14.pdf"
download "${BASE}/20200920171528im_/http://civicsocietygy.co.uk/wp-content/uploads/2020/08/Civic-Society-Newsletter-15.pdf"   "${DIR}/Civic-Society-Newsletter-15.pdf"
download "${BASE}/20211129074520im_/http://civicsocietygy.co.uk/wp-content/uploads/2021/07/Civic-Society-Newsletter-17.pdf"   "${DIR}/Civic-Society-Newsletter-17.pdf"

# Newer ones from 2024/12
download "${BASE}/20241218135449im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-26.pdf" "${DIR}/Civic-Society-Newsletter-26.pdf"
download "${BASE}/20241216221814im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-27.pdf" "${DIR}/Civic-Society-Newsletter-27.pdf"
download "${BASE}/20241216222016im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-28.pdf" "${DIR}/Civic-Society-Newsletter-28.pdf"
download "${BASE}/20241217092934im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-29.pdf" "${DIR}/Civic-Society-Newsletter-29.pdf"
download "${BASE}/20241218120556im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-30.pdf" "${DIR}/Civic-Society-Newsletter-30.pdf"
download "${BASE}/20241216224853im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-31.pdf" "${DIR}/Civic-Society-Newsletter-31.pdf"
download "${BASE}/20241218023411im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-32.pdf" "${DIR}/Civic-Society-Newsletter-32.pdf"
download "${BASE}/20241216230151im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-33.pdf" "${DIR}/Civic-Society-Newsletter-33.pdf"
download "${BASE}/20241218065301im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-34.pdf" "${DIR}/Civic-Society-Newsletter-34.pdf"
download "${BASE}/20241218135733im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-35.pdf" "${DIR}/Civic-Society-Newsletter-35.pdf"
download "${BASE}/20241217235204im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-36.pdf" "${DIR}/Civic-Society-Newsletter-36.pdf"
download "${BASE}/20241217005639im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-37.pdf" "${DIR}/Civic-Society-Newsletter-37.pdf"
download "${BASE}/20241216223012im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-38.pdf" "${DIR}/Civic-Society-Newsletter-38.pdf"
download "${BASE}/20241216221814im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-39.pdf" "${DIR}/Civic-Society-Newsletter-39.pdf"
download "${BASE}/20241216222428im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-40.pdf" "${DIR}/Civic-Society-Newsletter-40.pdf"
download "${BASE}/20241216223300im_/https://www.civicsocietygy.co.uk/wp-content/uploads/2024/12/Civic-Society-Newsletter-41.pdf" "${DIR}/Civic-Society-Newsletter-41.pdf"

echo ""
echo "Done: $(ls "${DIR}"/*.pdf 2>/dev/null | wc -l | tr -d ' ') PDFs in ${DIR}/"

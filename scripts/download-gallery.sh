#!/bin/bash
set -e

DIR="public/images/gallery"
BASE="https://web.archive.org/web"

# filename + timestamp pairs (from CDX API)
download() {
  local ts=$1 file=$2
  local url="${BASE}/${ts}im_/http://civicsocietygy.co.uk/wp-content/uploads/2017/09/${file}"
  echo "  -> ${file}"
  curl -4 -sS --connect-timeout 15 --retry 2 -o "${DIR}/${file}" "$url"
  local sz=$(wc -c < "${DIR}/${file}" | tr -d ' ')
  local ft=$(file -b "${DIR}/${file}")
  if echo "$ft" | grep -qi "JPEG"; then
    local dims=$(echo "$ft" | grep -oE '[0-9]+x[0-9]+' | head -1)
    echo "    OK  ${sz}B  ${dims}"
  else
    echo "    FAIL ($ft)"
  fi
}

echo "Downloading full-size gallery images..."
echo ""

download "20181125192749" "496.jpg"
download "20181125145247" "573.jpg"
download "20181125163833" "609-1.jpg"
download "20181125172917" "620.jpg"
download "20181125195441" "828.jpg"
download "20180904203625" "a-life-of-hotels-1.jpg"
download "20180904193423" "footer-image.jpg"
download "20180904181926" "header-image.jpg"
download "20181125161930" "IMG_7480.jpg"
download "20181125172638" "IMG_7543.jpg"
download "20181125163726" "IMG_7559.jpg"
download "20181125165127" "IMG_7561.jpg"

echo ""
echo "Done: $(ls "${DIR}"/*.jpg 2>/dev/null | wc -l | tr -d ' ') files in ${DIR}/"

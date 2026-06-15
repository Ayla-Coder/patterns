// Draw the shape at 9 positions: the tile itself + all 8 neighbors
for (let dx = -1; dx <= 1; dx++) {
  for (let dy = -1; dy <= 1; dy++) {
    drawShape(x + dx * tileSize, y + dy * tileSize);
  }
}

function seededRand(n) {
  const x = Math.sin(n) * 10000;
  return x - Math.floor(x); // returns 0–1
}

function download() {
  const link = document.createElement('a');
  link.download = 'pattern-tile.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}
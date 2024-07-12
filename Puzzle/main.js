document.addEventListener('DOMContentLoaded', () => {
  const tiles = Array.from(document.querySelectorAll('.tile'));
  const emptyTile = document.querySelector('.empty');
  const size = 3;

  do {
    shuffleTiles();
  } while (!isSolvable());

  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      moveTile(tile);
    });
  });

  function shuffleTiles() {
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    tiles.forEach((tile, i) => {
      tile.style.order = i;
    });
  }

  function moveTile(tile) {
    const emptyIndex = tiles.indexOf(emptyTile);
    const tileIndex = tiles.indexOf(tile);

    const emptyPosition = {
      x: emptyIndex % size,
      y: Math.floor(emptyIndex / size)
    };

    const tilePosition = {
      x: tileIndex % size,
      y: Math.floor(tileIndex / size)
    };

    if (isAdjacent(emptyPosition, tilePosition)) {
      swapTiles(emptyIndex, tileIndex);
      checkIfCompleted();
    }
  }

  function isAdjacent(pos1, pos2) {
    return (Math.abs(pos1.x - pos2.x) + Math.abs(pos1.y - pos2.y)) === 1;
  }

  function swapTiles(index1, index2) {
    [tiles[index1], tiles[index2]] = [tiles[index2], tiles[index1]];

    tiles.forEach((tile, i) => {
      tile.style.order = i;
    });
  }

  function checkIfCompleted() {
    for (let i = 0; i < tiles.length - 1; i++) {
      if (tiles[i].id !== `tile-${i + 1}`) {
        return false;
      }
    }
    swal("恭喜完成拼圖", "", "success", {button: "關閉"})
    .then((result) => {
      window.close();
    });
    return true;
  }

  function isSolvable() {
    const tileOrder = tiles.map(tile => tile.id).filter(id => id !== 'tile-9');
    const inversions = countInversions(tileOrder);
    const emptyRow = Math.floor(tiles.indexOf(emptyTile) / size) + 1; // 1-based row number

    if (size % 2 !== 0) {
      return inversions % 2 === 0;
    } else {
      const emptyRowFromBottom = size - emptyRow + 1; // counting from bottom
      if (emptyRowFromBottom % 2 === 0) {
        return inversions % 2 !== 0;
      } else {
        return inversions % 2 === 0;
      }
    }
  }

  function countInversions(arr) {
    let inversions = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          inversions++;
        }
      }
    }
    return inversions;
  }
});

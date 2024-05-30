function getMaximumGold(grid) {
  if (!grid || grid.length === 0) return 0;

  let maxGold = 0;
  let m = grid.length;
  let n = grid[0].length;

  function findGold(i, j) {
    let queue = [[i, j, grid[i][j], new Set([`${i},${j}`])]]; // queue stores [current row, current col, current gold collected, visited cells]
    let maxGoldFromStart = 0;

    while (queue.length > 0) {
      let [currentI, currentJ, currentGold, visited] = queue.shift();

      // Directions to move: right, left, down, up
      const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ];
      for (let [di, dj] of directions) {
        let nextI = currentI + di,
          nextJ = currentJ + dj;
        let nextPos = `${nextI},${nextJ}`;

        if (
          nextI >= 0 &&
          nextI < m &&
          nextJ >= 0 &&
          nextJ < n &&
          grid[nextI][nextJ] > 0 &&
          !visited.has(nextPos)
        ) {
          let newVisited = new Set(visited); // Copy the set for the new path
          newVisited.add(nextPos);
          let newGold = currentGold + grid[nextI][nextJ];
          maxGoldFromStart = Math.max(maxGoldFromStart, newGold);
          queue.push([nextI, nextJ, newGold, newVisited]);
        }
      }
    }

    return maxGoldFromStart;
  }

  // Try to start collecting gold from every cell
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) {
        maxGold = Math.max(maxGold, findGold(i, j));
      }
    }
  }

  return maxGold;
}

// Example usage
const grid = [
  [0, 6, 0],
  [5, 8, 7],
  [0, 9, 0],
];
console.log(getMaximumGold(grid)); // Output the maximum gold that can be collected

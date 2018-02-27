function riverSizes(matrix) {
  const sizes = []
  const visited = matrix.map(row => row.map(value => false))

  for(let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) {
        continue
      }
      traverseNode(i, j, matrix, visited, sizes)
    }
  }
  return sizes

}


function traverseNode(i, j, matrix, visited, sizes) {
  let currentRiverSize = 0;
  const nodesToExplore = [[i, j]];
  while(nodesToExplore.length) {
    const currentNode = nodesToExplore.pop()
    //currentNode
    i = currentNode[0];
    j = currentNode[1];
    //if already visited don't bother
    if (visited[i][j]) continue
    //if not visited set to visited
    visited[i][j] = true
    //if land ignore and continue
    if (matrix[i][j] === 0) continue
    //if water add to river size
    currentRiverSize++;
    //find all the unvisitedNeighbors of the current node we are at
    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    for (const neighbor of unvisitedNeighbors) {
      //for each neighbor that was unvisited we want to eventually explore
      nodesToExplore.push(neighbor)
    }

  }
  //add current river size to sizes array
  if (currentRiverSize > 0) sizes.push(currentRiverSize)
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  const unvisitedNeighbors = []
  if (i > 0  && !visited[i - 1][j]) {
    unvisitedNeighbors.push([i - 1, j])
  }
  if (i < matrix.length && !visited[i + 1][j]) {
    unvisitedNeighbors.push([i + 1, j])
  }
  if (j > 0 && !visited[i][j - 1]) {
    unvisitedNeighbors.push([i, j - 1])
  }
  if (j < matrix[0].length && !visited[i][j + 1]) {
    unvisitedNeighbors.push([i, j + 1])
  }
  return unvisitedNeighbors
}

function isValidWordSquare(square) {
  let k = square.length
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < k; j++) {
      if (square[i][j] !== square[j][i]) {
        return false
      }
    }
  }
  return true
}


let squ = [['b', 'a', 'l', 'l'], ['a', 'r', 'e', 'a'], ['l', 'e', 'a', 'd'], ['l', 'a', 'd', 'y']]

console.log(isValidWordSquare(squ))

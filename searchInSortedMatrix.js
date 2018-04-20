function searchInSortedMatrix(matrix, target) {
  // Write your code here.'

  let row = 0
  let col = matrix[0].length
  while (row < matrix.length && col >= 0) {

    if (matrix[row][col] < target) {
      row++
    } else if (matrix[row][col] > target) {
      col--
    } else return [row, col]

  }

  return [-1, -1]
}

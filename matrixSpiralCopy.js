function spiralCopy(inputMatrix) {
  // your code goes here
  // int leftcol = 0, rightcol = len-1
  const result = []
  const matrixLength = inputMatrix.length * inputMatrix[0].length
  let leftCol = 0
  let rightCol = inputMatrix[0].length - 1
  let topRow = 0
  let bottomRow = inputMatrix.length - 1


  let i = 0
  while ( i < matrixLength) {

      for (let col = leftCol; col <= rightCol; col++) {


        result.push(inputMatrix[topRow][col])
        i++
        if (i >= matrixLength) return result


    }
    topRow++;

  for (let row = topRow; row <= bottomRow; row++) {

    result.push(inputMatrix[row][rightCol])
    i++
    if (i >= matrixLength) return result

  }
  rightCol--

    for (let col = rightCol; col >= leftCol; col--) {


        result.push(inputMatrix[bottomRow ][col])
        i++
      if (i >= matrixLength) return result

    }
    bottomRow--


  for (let row = bottomRow; row >= topRow; row--) {


        result.push(inputMatrix[row][leftCol])
        i++
    if (i >= matrixLength) return result

  }
    leftCol++

  }


  return result

}

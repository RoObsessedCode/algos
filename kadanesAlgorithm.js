function kadanesAlgorithm(array) {
  // Write your code here.
  let maxSoFar = array[0];
  let currentMax = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i] + currentMax) {
      if (array[i] > maxSoFar) {
        maxSoFar = array[i]
      }
      currentMax = array[i];
    } else {
      if (currentMax + array[i] > maxSoFar) {
        maxSoFar = currentMax + array[i]
      }
      currentMax += array[i]

    }
  }
  return maxSoFar

}

console.log(kadanesAlgorithm([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]))

/*
Write a fuunction that takes in a non-empty array of integers
and returns maximum sum contained by summing all the numbers
in a non-empty sub-array  of the input array. subarray can only contain
adjacent numbers
[5, -2, 3, 4, -3, 1]
 5  3

*/

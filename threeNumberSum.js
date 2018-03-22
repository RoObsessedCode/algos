function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const triplets = []
  for (let i = 0; i < array.length -2; i++) {
    let left = i + 1
    let right = array.length - 1
    while (left < right) {
      const currentSum = array[left] + array[right] + array[i]
      if (currentSum === targetSum) {
        const miniArray = [array[left], array[right], array[i]]
        triplets.push(miniArray)
        left++
        right--
      } else if (currentSum < targetSum) {
        left++
      } else if (currentSum > targetSum) {
        right--
      }
    }
  }
  return triplets
}


console.log(threeNumberSum([3, 9, 12, 4, 8, 7, 17, 5, 6, 23, 2, 1, 15, 11 ], 20))

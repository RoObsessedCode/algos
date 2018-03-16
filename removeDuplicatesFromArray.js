

var removeDuplicates = function(nums) {
    if (!nums.length) return 0

    for (var k = 0; k < nums.length; k++) {

      if (nums[k] === nums[k-1]) {
        let currentNum = nums[k]
        let nextNum = findNextNum(nums, k)
        if (!nextNum) break
        let j = k
        while(currentNum === nums[j] ) {

          nums[j] = nextNum
          j++
        }
        console.log(nums)
      }

    }

    return nums.splice(0, k)


};


var findNextNum = function(nums, k) {
  const currentNum = nums[k]
  let i = k
  while (nums[i] === currentNum) {
    i++
  }
  return nums[i]
}

console.log(findNextNum([1, 2, 3, 4, 4, 4, 5], 2))


// [1, 2, 3, 3, 3, 4, 4, 5]
//           ^

// [1, 2, 3, 4, 4, 4, 4, 5]
//             ^

// [1, 2, 3, 4, 5, 5, 5, 5]
//                 ^

// array.length - k


console.log(removeDuplicates([1, 2, 3, 3, 3, 3, 4, 4, 5, 5]))
console.log(removeDuplicates([1, 2, 3, 3, 3, 4, 4, 5]))

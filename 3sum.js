
/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

  let sum = 0
  let hash = {}
  let res = []

  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          for (let k = j + 1; k < nums.length; k++) {

              if ((nums[i] + nums[j] + nums[k]) === sum) {
                  let arr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b)
                  let key = arr[0] + '-' + arr[1] + '-' + arr[2]
                  console.log(key)

                  if (hash[key] === undefined) {
                      hash[key] = true
                      const oneSol = [nums[i], nums[j], nums[k]]
                      res.push(oneSol)
                  } else {
                      hash[key] = false

                  }
              }
          }
      }
  }
  return res
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

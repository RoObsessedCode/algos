
/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

*/


function intersectionTwoArrays(a, b) {
  let hash = getHash(a)
  let res = []
  for (let i = 0; i < b.length; i++) {
    let num = b[i]
    if (hash[num] > 0) {
      res.push(num)
      hash[num]--
    }

  }

  return res
}


function getHash(arr) {
  let hash = {}
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i]
    if (hash[elem] === undefined) {
      hash[elem] = 1
    } else {
      hash[elem]++
    }
  }
  return hash

}

console.log(intersectionTwoArrays([1, 2, 2, 1], [2, 2]))

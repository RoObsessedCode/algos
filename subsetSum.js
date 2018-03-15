function subsetSum(target, nums) {
  const possibleSums = new Set([0])
  for (const num of nums) {
    const currentPossibleSums = new Set(possibleSums)
    for (const sum of currentPossibleSums) {
      const newSum = sum + num

      if (newSum === target) return true
      if (newSum < target) possibleSums.add(newSum)
    }
  }
  return false

}


function subsetSum (target, nums, idx = 0) {
  if (target === 0) return true
  if (target < 0 || idx === nums.length) {
    return false
  }
  const num = nums[idx]

  const whenExcluded = subsetSum(target, nums, idx + 1)

  const whenIncluded = subsetSum(target - num, nums, idx + 1)
}

function subsetSum (target, nums, idx = 0, memo = {}) {
  if (memo.hasOwnProperty(target)) return memo[target]

  if (target === 0) {
    return true
  } if (target < 0 || idx === nums.length) {
    return false
  }

  const num = nums[idx]

  const whenExcluded = subsetSum(target, nums, idx + 1, memo)

  const whenINcluded = subsetSum(target - num, nums, idx + 1, memo)

  const result = whenExcluded || whenIncluded

  memo[target] = result
}

function subsetSum(target, nums, idx = 0) {
  if (target === 0) return true

  if (target < 0 || idx = nums.length) return false

  const num = nums[idx]

  const whenExcluded = subsetSum(target, nums, idx + 1)

  const whenIncluded = subsetSum(target - num, idx + 1)


  return whenExcluded || whenIncluded
}






function subsetSum(target, nums, idx = 0, memo={}) {
  const key = target + '-' + idx
  if (memo.hasOwnProperty(key)) return memo[key]

  if (target === 0) return true

  if (target < 0 || idx === nums.length) {

  const num = nums[idx]

  const whenExcluded = subsetSum(target, nums, idx + 1)

  const whenIncluded = subsetSum(target - num, idx + 1)

  const result = whenExcluded || whenIncluded

  memo[key] = result

  return result

  }
}

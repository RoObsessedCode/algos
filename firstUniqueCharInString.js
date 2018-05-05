function firstUnique(str) {
  let hash = {}
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]] === undefined) {
      hash[str[i]] = i
    } else if (hash[str[i]] >= 0) {
      hash[str[i]] = -1
    }
  }
  let keys = Object.keys(hash)

  let smallest = str.length
  for (let k = 0; k < keys.length; k++) {
    let key = keys[k]
    if (hash[key] >= 0 && hash[key] < smallest) {
      smallest = hash[key]
    }
  }

  if (smallest === str.length) return -1
  return smallest

}


console.log(firstUnique('apple'))
console.log(firstUnique('leetcode'))
console.log(firstUnique('loveleetcode'))

function permutations(str) {
  
  if (!str.length) return []
  let result = []
  let numPerms = permutations(str.slice(0, str.length - 1))
  
  for (let i = 0; i < numPerms.length; i++) {
    result = generatePerms(result, numPerms, str[str.length - 1])
  }
}



console.log(permutations('bandaid'))
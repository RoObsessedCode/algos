function powerset(array) {

  const subsets = [[]]
  for (const ele of array) {
    let len = subsets.length
    for(let i = 0; i < len; i++) {
      newSubset = subsets[i]
      newSubset.concat(ele)
      subsets.push(newSubset)
    }
  }

  return subsets



}

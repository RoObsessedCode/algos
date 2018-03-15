function longestCommonSubsequence(str1, str2) {
  // Write your code here.

  const seqs = []
  for (let i = 0; i < str1.length + 1; i++) {
    const row = []
    for (let j = 0; j < str2.length + 1; j++) {
      row.push('')
    }
    row[0] = ''
    seqs.push(row)
  }


  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        seqs[i][j] = seqs[i - 1][j - 1] + str1[i-1]
      } else {
        seqs[i][j] = (seqs[i-1][j].length > seqs[i][j-1]) ? seqs[i-1][j] : seqs[i][j-1]
      }
    }
  }
  //console.log(seqs)
  return seqs[str1.length][str2.length]


}

console.log(longestCommonSubsequence("zxvvyzw", "xkykzpw"))
console.log(longestCommonSubsequence('phantoms', 'pbarlnzzmzds'))

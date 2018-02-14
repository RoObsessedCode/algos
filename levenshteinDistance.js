function levenshteinDistance(str1, str2) {
  const edits = []
  for (let i = 0; i < str1.length + 1; i++) {
    const row = []
    for (let j = 0; j < str2.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row)
  }

  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        edits[i][j] = edits[i-1][j-1]
      } else {
        edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1])
      }
    }
  }

  return edits[str1.length][str2.length]

}

console.log(levenshteinDistance("abc", "yabd"));
//insertion of, deletion of, and substitution of another character

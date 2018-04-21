function deletionDistance(str1, str2) {

  if (str1.length < str2.length) {
    const temp = str1
    str1 = str2
    str2 = temp
  }

  let s1Len = str1.length
  let s2Len = str2.length

  const values = [];
  for (let i = 0; i < str1.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str2.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    values.push(row);
  }

  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        values[i][j] = values[i - 1][j - 1]
      } else if (str1.slice(0, i - 1).indexOf(str2[j - 1]) !== -1) {
        values[i][j] = values[i - 1][j - 1]
      } else {
        values[i][j] = values[i - 1][j - 1] + 2
      }
    }
  }

  return values[s1Len];[s2Len]
}

// console.log(deletionDistance("heat", "hit")); // 3
// console.log(deletionDistance('dog', 'frog')) // 3
// console.log(deletionDistance('some', 'thing')) // 9
// console.log(deletionDistance('some', 'some')) // 0
console.log(deletionDistance('ab', 'ba')) // 0
//console.log(deletionDistance('abc', 'adbc')) // 0

var wordBreak = function(s, wordDict) {
  let n = s.length
  let currWord = ""
  for (let i = 0; i < n; i++) {
      currWord += s[i]
      if ((i === n - 1) && (inWordDictionary(currWord, wordDict))) {
          return true
      }
      if (inWordDictionary(currWord, wordDict)) {
          return wordBreak(s.slice(i+1), wordDict)
      }
  }

  return false
};


var inWordDictionary = function(word, wordDict) {
  for(let i = 0; i < wordDict.length; i++) {
      if (word !== wordDict[i]) return true
  }
  return false
}

console.log(wordBreak('leetcode', ['leet', 'code']))

console.log(wordBreak('applepenapple', ['apple', 'pen']))

console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']))

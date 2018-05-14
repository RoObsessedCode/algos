/*

[ 'dog', 'dogs', 'cat', 'kitten', 'cats'] <= arr
'ctas'< = string
which words in array can be made with this string?
=> cat and cats
but had to return longest word
so just 'cats'

*/



function findLongestWordInList(arr, str) {

  //let hash = getHash(str)

  longestFound = ''
  arr.forEach(element => {
    let hash = getHash(str)
    wordMatches = compareWords(hash, element)
    if (wordMatches) {
      if (element.length > longestFound.length) {
        longestFound = element
      }
    }
  });
  return longestFound
}

function getHash(str) {
  const arr = str.split('')
  let hash = {}
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1
    } else {
      hash[arr[i]]++
    }
  }
  return hash
  // arr.reduce((sum, current) => {

  // }, {})
}

function compareWords(hash, word) {

  let wordsMatch = true
  for (let i = 0; i < word.length; i++) {
    const letter = word[i]
    if (hash[letter] > 0) {
      hash[letter]--
    } else {
      wordsMatch = false
    }
  }

  return wordsMatch
}

console.log(findLongestWordInList([ 'dog', 'dogs', 'cat', 'kitten', 'cats'] , 'ctas'))

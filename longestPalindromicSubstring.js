function longestPalindromicSubstring(string) {
  let longest = ''
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      const substring = string.slice(i, j + 1)
      if (substring.length > longest.length && isPalindrome(substring)) {
        longest = substring
      }
    }
  }
  return longest
}

function isPalindrome(string) {
  let l = 0;
  let r = string.length - 1
  while (l < r) {
    if (string[l] !== string[r]) {
      return false
    }
    l++
    r--
  }
  return true


}
console.log(isPalindrome('car'))
console.log(isPalindrome('rar'))


console.log(longestPalindromicSubstring('catacracecar'))

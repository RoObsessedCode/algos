
function validPalindrome(str) {

  let seenOneMistake = false

  let left = 0, right = str.length - 1

  while (left <= right) {

   if (str[left] !== str[right] && !seenOneMistake) {
      seenOneMistake = true
   } else if (str[left] !== str[right] && seenOneMistake) {
      return false
   }
   left++
   right--

  }

  if (seenOneMistake && str.length % 2 !== 0) return false

  return true

}


console.log(validPalindrome('abccba'))

console.log(validPalindrome('abcrdcba'))

console.log(validPalindrome('fbcrcba'))

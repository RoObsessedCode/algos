

/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*/

function addBinary(a, b) {
  let carry = 0
  let res = ''
  let diff = Math.abs(a.length - b.length)
  let numZeroes = ''

  for (let i = 0; i < diff; i++) {
    numZeroes += '0'
  }

  if (a.length > b.length) {
    b += numZeroes
  } else if (a.length < b.length) {
    a += numZeroes
  }



  for (let i = b.length - 1; i >= 0; i--) {
    let numA = +a[i]
    let numB = +b[i]
    let sum = numA + numB

    if ((sum) != 2) {
      res += sum + carry
      carry = 0
    } else {
      res += 0
      carry = 1
    }
  }

  let result = res.split('').reverse().join('')

  if (carry > 0) {
    return '1' + result
  } else return result
}

console.log(addBinary('1010', '1011'))
console.log(addBinary('1', '11'))

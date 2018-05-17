/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let phone = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };
  let originalCombos = [];
  let combos = []
  digits = digits.split("");
  digits = digits.map(e => phone[e]);
  console.log('DIGITS: ', digits)

  originalCombos = getCombosOfTwoNums(digits[0], digits[1]);
  if (digits.length === 2) return originalCombos


  for (let i = 2; i < digits.length; i++) {
    let group = digits[i];
    console.log("GROUP: ", group);
    if (combos.length > 0) originalCombos = combos
    for (let j = 0; j < group.length; j++) {
      const letter = group[j];
      console.log(j, letter);
      combos = combos.concat(getMoreCombos(originalCombos, letter))
    }
  }

  return combos;
};


function getMoreCombos(combos, letter) {
  let res = []
  for (let i = 0; i < combos.length; i++) {
    let combo = combos[i]
    res.push(combo + letter)
  }
  return res
}


function getCombosOfTwoNums(strA, strB) {
  const res = [];
  for (let i = 0; i < strA.length; i++) {
    for (let j = 0; j < strB.length; j++) {
      const newStr = strA[i] + strB[j];
      res.push(newStr);
    }
  }
  return res;
}
//console.log(getCombosOfTwoNums('abc', 'def'))

console.log(letterCombinations("234"));

//  digits = digits.split('')

//  const letters = digits.map(e => {
//    const str = phone[e]
//    return {[str]: 0}
//  })
//  const combos = []
//  let currCombo = ''
//  for (let i = 0; i < letters.length; i++) {
//    if (hitMax(letters)) break
//     let elem = letters[i]
//     const str = elem[0]
//     let count = elem[1]

//     if (i === letters.length - 1) {
//       combos.push(currCombo)
//       currCombo = ''
//     }

//  }

//  return letters

// function hitMax(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let obj = arr[i]
//     let strLength = obj[0].length
//     let count = obj[1]
//     if (count < strLength) return false
//   }
//   return true
// }



// let a = ["gad","agd","gae","age","gaf","agf","gbd","bgd","gbe","bge","gbf","bgf","gcd","cgd","gce","cge","gcf","cgf","had","ahd","hae","ahe","haf","ahf","hbd","bhd","hbe","bhe","hbf","bhf","hcd","chd","hce","che","hcf","chf","iad","aid","iae","aie","iaf","aif","ibd","bid","ibe","bie","ibf","bif","icd","cid","ice","cie","icf","cif"]

// let b = ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]

[ 'adg',
  'aeg',
  'afg',
  'bdg',
  'beg',
  'bfg',
  'cdg',
  'ceg',
  'cfg',
  'adh',
  'aeh',
  'afh',
  'bdh',
  'beh',
  'bfh',
  'cdh',
  'ceh',
  'cfh',
  'adi',
  'aei',
  'afi',
  'bdi',
  'bei',
  'bfi',
  'cdi',
  'cei',
  'cfi' ]

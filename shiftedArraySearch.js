function shiftedArrSearch(shiftArr, num) {
  let startIndexOfSecondSubArray = findPivot(shiftArr)

  let start = -1
  let end = -1

  if ((num >= shiftArr[startIndexOfSecondSubArray]) && (num <= shiftArr[shiftArr.length - 1])) {
    start = startIndexOfSecondSubArray
    end = shiftArr.length - 1
  } else {
    start = 0
    end = startIndexOfSecondSubArray - 1
  }


  return binSearch(shiftArr, num, start, end)
}

function findPivot(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return i
    }
  }
}

function binSearch(arr, num, start, end) {

  while (start <= end) {
    const i = Math.floor((start + end) / 2)
    if (arr[i] === num) {
      return i
    } else if (arr[i] < num) {
      start = i + 1
    } else {
      end = i - 1
    }
  }

  return -1
}


console.log(shiftedArrSearch([8, 11, 13, 2, 5, 7], 13))

console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 2))

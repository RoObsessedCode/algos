function validTriangles(arr) {

  arr.sort((a, b) => a - b)
  const result = []

  for (let i = 0; i < arr.length -2; i++) {
    let left = i + 1
    let right = arr.length - 1
    while (left < right) {
      if (isTriangle(arr[left], arr[right], arr[i])) {
        result.push([arr[left], arr[right], arr[i]])
        left++
        right--
      }
    }
  }
}





function isTriangle(a, b, c) {

  let singleA = b + c > a ? true : false
  let singleB = a + c > b ? true : false
  let singleC = a + b > c ? true : false

  if (singleA || singleB || singleC) {
    return true
  } else {
    return false
  }

}

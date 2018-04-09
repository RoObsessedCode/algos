function validTriangles(arr) {

  arr.sort((a, b) => a - b)
  const result = []

  for (let i = 0; i < arr.length -2; i++) {
    let a = 0
    let b = 1
    let right = b - 1
    let left = 0
    while (left < right) {
      const i = math.floor((left + right) / 2)

      if (isTriangle(arr[i], arr[a], arr[b])) result.push([arr[i], arr[a], arr[b]]);

      if (arr[i] > arr[a] && arr[i] > arr[b] ) {
        right = i - 1
      }

      else if (i > a && i < b) {

      }

      else if (i < a && i < b) {

      }
    }
  }
}





function isTriangle(a, b, c) {

  let singleA = b + c > a ? true : false
  let singleB = a + c > b ? true : false
  let singleC = a + b > c ? true : false

  if (singleA && singleB && singleC) {
    return true
  } else {
    return false
  }

}

function validTriangles(arr) {


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

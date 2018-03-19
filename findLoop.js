function findLoop(head) {

  var one = head
  var two = head
  let result = null
  while (one !== two) {
    one = one.next
    two = two.next.next
  }

  one = head
  while (one !== two) {
    one = one.next
    two = two.next
    let result = two
  }

  return result

  //return node from which loop originates


}

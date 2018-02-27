function removeKthNodeFromEnd(head, k) {
  // Write your code here.]]
  let currentNode = head;
  let count = 0;
  while (currentNode !== null) {
    count = count + 1;
    currentNode = currentNode.next;
  }
  let distance = count - k - 1;
  let newCurrent = head;

  if (distance < 0) {
    let previousHead = head
    previousHead.next = null
    head.value = head.next.value

  } else {
    while (distance > 0) {
      distance--
      newCurrent = newCurrent.next
    }

    let nodeToDelete = newCurrent.next
    newCurrent.next = nodeToDelete.next
    nodeToDelete.next = null
  }
}


function removeKthNodeFromEnd(head, k) {
  let counter = 1
  let first = head
  let second = head
  while (counter <=k ) {
    second = second.next
    counter++
  }

  if (second === null) {
    head.value = head.next.value
    head.next = head.next.next
    return
  }
  while (second.next !== null) {
    second = second.next
    first = first.next
  }
  first.next = first.next.next
}

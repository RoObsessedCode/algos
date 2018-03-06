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

function removeKthNodeFromEnd(head, k) {

  let counter = 1;
  let first = head
  let second = head
  while (counter <= k) {
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

function removeKthNodeFromEnd(head, k) {
  let counter = 1;
  let first = head
  let second = head
  while (counter <= k) {
    second = second.next
    counter++
  }
  if (second === null) {
    head.value = head.next.value
    head.next = head.next.next
  }
  while (second.next !== null) {
    second = second.next
    first = first.next
  }
  first.next = first.next.next
}

/*
  1. Declare two pointers, both pointing to head
  2. Increment second pointer k times
  3. At this point first is pointing to head and
     second is pointing to kth node in the linked list
  4. if in the case second has reached null that means k was larger than length of linked list and we need to remove head
      a. heads value is now equal to head-> next's value
      b. set next of head to next of next of head
  5. now, continue to iterate first, second index until second hits last node in linked list
      a. This means that first index has traveled (length of linked list - k nodes) aka the kth + 1 node from the end so we need to remove (kth + 1 from end).next





      1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8

*/

function removeKthNodeFromEnd(head, k) {
  let c = 1
  let first = head
  let second = head
  while (c <= k) {
    second = second.next
    c++
  }

  if (second === null) {
    head.value = head.next.value
    head.next = head.next.next
  }

  while (second.next !== null) {
    second = second.next
    first = first.next
  }

  first.next = first.next.next



}

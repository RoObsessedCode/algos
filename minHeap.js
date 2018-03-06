class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  //O(n) time | O(1) space
  buildHeap(array) {
    // Write your code here.
    let firstParentIdx = Math.floor(array.length - 2 / 2)
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array)
    }
    return array
   }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIndex = (currentIdx * 2) + 1 //3 * 2 + 1 === 7
    let childTwoIndex, idxToSwap
    while (childOneIndex <= endIdx) {
      if (currentIdx * 2 + 2 <= endIdx) {
         childTwoIndex = currentIdx * 2 + 2
      } else {
        childTwoIndex = -1
      }
      if (childTwoIndex !== -1 && heap[childTwoIndex] < heap[childOneIndex]) {
        idxToSwap = childTwoIndex
      } else {
        idxToSwap = childOneIndex
      }

      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap)
        currentIdx = idxToSwap
        childOneIndex = currentIdx * 2 + 2
      } else {
        break
      }

      let childTwoIndex = (currentIdx * 2) + 2

    }
  }



  siftDown(currentIdx, endIdx, heap) {
    // Write your code here.
    let childOneIndex = (currentIdx * 2) + 1
    while(childOneIndex <= endIdx) {

      if (currentIdx * 2 + 2 <= endIdx) {
        childTwoIndex = currentIdx * 2 + 2
      } else {
        childTwoIndex = -1
      }
      if (childTwoIndex !== -1 && heap[childTwoIndex] < heap[childOneIndex]) {
        let idxToSwap = childTwoIndex
      } else {
        let idxToSwap = childOneIndex
      }
      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap)
        currentIdx = idxToSwap
        childOneIndex = currentIdx * 2 + 1
      } else {
        break
      }

      let childTwoIndex = (currentIdx * 2) + 2
    }

  }


//O(Log(n)) time | O(1) space
  siftUp(currentIdx, heap) {
    // Write your code here.
    let parentIdx = Math.floor((currentIdx - 1) / 2)
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, this.heap)
      currentIdx = parentIdx
      parentIdx = Math.floor((currentIdx - 1) / 2)
    }
  }

  peek() {
    // Write your code here.
    return this.heap[0]
  }

  remove() {
    // Write your code here.
    //swapping root value with last value in ehap
    //poppinng value of array and sifting value we swap, down
    this.swap(0, this.heap.length - 1, this.heap)
    let valueToRemove = this.heap.pop()
    this.siftDown(0, this.heap.length - 1, this.heap)
    return valueToRemove
  }


  insert(value) {
    // Write your code here.
    this.heap.push(value)
    this.siftUp(this.heap.length - 1, this.heap)

  }

  siftUp(currentIdx, heap) {
    const parentIdx = Math.floor(currentIdx / 2 - 1)
    while (parentIdx > 0 && heap[parentIdx] > heap[currentIdx]) {
      currentIdx = parentIdx
      parentIdx = Math.floor(currentIdx / 2 - 1)

    }
  }


  swap(i, j, heap) {
    const holder = heap[i]
    heap[i] = heap[j]
    heap[j] = holder
  }
}

const mergeSort = function(arr) {
  if (arr.length < 2) return arr
  const splits = splitItUp(arr)
  let left = splits[0]
  let right = splits[1]

  return merge(mergeSort(left), mergeSort(right))
}

const splitItUp = function(arr) {
  const center = arr.length / 2
  const left = arr.slice(0, center)
  const right = arr.slice(center)
  return [left, right]
}


const merge = function(left, right) {
  let leftIdx = 0;
  let rightIdx = 0;
  const merged = []

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx++])
    } else {
      merged.push(right[rightIdx++])
    }
  }

  for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx])
  for (; rightIdx < right.length; rightIdx) merged.push(right[rightIdx])

  return merged


}

function subarraySort(array) {
  let smallestOutOfOrder = null;
  let largestOutOfOrder = 0;
  let foundFirstDecent = false;
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= array[i - 1] && !foundFirstDecent) {
      smallestOutOfOrder = array[i];
      foundFirstDecent = true;
    }
    if (array[i] < smallestOutOfOrder && foundFirstDecent) {
      smallestOutOfOrder = array[i];
    }
    if (foundFirstDecent && arr[i] > arr[i-1]) {
      largestOutOfOrder = arr[i]
    }
  }
}

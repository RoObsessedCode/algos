function knapSack(items, capacity) {
  let knapSackValues = [];

  for (let i = 0; i < items.length + 1; i++) {
    const row = new Array(capacity + 1).fill(0);
    knapSackValues.push(row);
  }

  for (let i = 1; i < items.length + 1; i++) {

    let currItem = items[i - 1];

    const value = currItem[0];
    const weight = currItem[1];
    for (let j = 0; j < capacity + 1; j++) {
      console.log("currItem", currItem);

      if (weight > j) {
        knapSackValues[i][j] = knapSackValues[i - 1][j]
      } else {
        knapSackValues[i][j] = Math.max(
          knapSackValues[i - 1][j],
          value + knapSackValues[i - 1][j - weight])
      }


      ;
    }
  }

  return knapSackValues[items.length][capacity];
}

let knap = [[1, 2], [4, 3], [5, 6], [6, 7]];
let cap = 10;
console.log(knapSack(knap, cap));

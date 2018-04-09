// function bucketSort(array, n) {
//   n = array.length
//   const buckets = [];

//   let minValue = array[0];
//   let maxValue = minValue;
//   array.forEach(function(currentVal) {
//     if (currentVal < minValue) {
//       minValue = currentVal;
//     } else if (currentVal > maxValue) {
//       maxValue = currentVal;
//     }
//   });

//   let bucketCount = Math.floor((maxValue - minValue) / n) + 1
//   for (let i = 0; i < n; i++) {
//     buckets.push([]);
//   }
//   console.log("buckets -->", buckets);

//   for (let i = 0; i < n; i++) {
//     //let bi = (n * array[i]) % n;
//     let bi = Math.floor((array[i] - minValue)/n)
//     buckets[bi].push(array[i]);
//   }

//   for (let i = 0; i < n; i++) {
//     insertionSort(buckets[i]);
//   }

//   let sorted = [];
//   for (let i = 0; i < n; i++) {
//     sorted = sorted.concat(buckets[i]);
//   }

//   return sorted;
// }

// function insertionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let j = i;
//     while (j > 0 && array[j] < array[j - 1]) {
//       swap(j, j - 1, array);
//       j -= 1;
//     }
//   }
//   return array;
// }

// function swap(i, j, array) {
//   const temp = array[j];
//   array[j] = array[i];
//   array[i] = temp;
// }

console.log(bucketSort([6, 9, 3, 14, 8, 1, 12, 4, 25, 33, 26, 27, 23, 5], 8));


// InsertionSort to be used within bucket sort
function insertionSort(array) {
  var length = array.length;

  for(var i = 1; i < length; i++) {
    var temp = array[i];
    for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }

  return array;
}

// Implement bucket sort
function bucketSort(array, bucketSize) {
  if (array.length === 0) {
    return array;
  }

  // Declaring vars
  var i,
      minValue = array[0],
      maxValue = array[0],
      bucketSize = bucketSize || 5;

  // Setting min and max values
  array.forEach(function (currentVal) {
  	if (currentVal < minValue) {
  		minValue = currentVal;
  	} else if (currentVal > maxValue) {
  		maxValue = currentVal;
  	}
  })

  // Initializing buckets
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount);

  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  // Pushing values to buckets
  array.forEach(function (currentVal) {
  	allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
  });

  // Sorting buckets
  array.length = 0;

  allBuckets.forEach(function(bucket) {
  	insertionSort(bucket);
  	bucket.forEach(function (element) {
  		array.push(element)
  	});
  });

  return array;
}


function bucketSort(array, bucketSize) {
  if (array.length === 0) {
    return array;
  }
  
  var i,
      minValue,
      maxValue,
      bucketSize = bucketSize || 5
}
    
array.forEach(function (currVal) {
  if (currentVal < minValue) {
    minValue = currentVal
  } else if (currVal > maxValue) {
    maxValue = currVal
  }
})

var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
var allBuckets = new Array(bucketCount)
// ************ Bubble Sort ************ //

const bubbleSort = arr => {
  do {
    var sorted = false;
    arr.forEach((num, i) => {
      console.log(`[UNSORTED]`, arr);
      if (num > arr[i + 1]) {
        let temp = num;
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = true;
      }
    });
  } while (sorted);
  return arr;
};

// ************ END OF Bubble Sort ************ //

// ************ Insertion Sort ************ //

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      console.log(`[UNSORTED]`, arr);
      if (arr[i] < arr[j]) {
        const spliced = arr.splice(i, 1);
        arr.splice(j, 0, spliced[0]);
      }
    }
  }
  return arr;
};

// ************ END OF Insertion Sort ************ //

// ************ Merge Sort ************ //

const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const length = arr.length;
  const mid = Math.floor(length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, length);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return stitch(sortedLeft, sortedRight);
};

const stitch = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
};

// ************ END OF Merge Sort ************ //

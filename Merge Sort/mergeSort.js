// ****** EXERCISE 1 ****** //

const mergeSort = nums => {
  if (nums.length < 2) {
    return nums;
  }

  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return stitch(sortedLeft, sortedRight);
};

const stitch = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  while (left.length) {
    results.push(left.shift());
  }
  while (right.length) {
    results.push(right.shift());
  }

  return results;
};

// ****** END OF Exercise 1 ****** //

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

// ****** Merge Sort NOTES ****** //
/*

1.  Merge sort is the one most often used.

2. When you use somthing like array.sort(), 90% of the time, under the hood, merge sort is being utilized.

3.  Reason why merge sort is commonly used is because its consistent.

4.  Merge sort uses Recursion.

*/

// ****** END OF Merge Sort NOTES ****** //

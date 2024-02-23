const fibsRec = (n) => {
  if (n < 0) {
    return [];
  }

  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [...fibsRec(n - 1), 1];
  } else {
    const val = [
      ...fibsRec(n - 1).slice(-1),
      ...fibsRec(n - 2).slice(-1),
    ].reduce((acc, currVal) => (acc += currVal), 0);
    return [...fibsRec(n - 1), val];
  }
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  } else {
    const mid = Math.floor(arr.length / 2);
    const first = arr.slice(0, mid);
    const last = arr.slice(mid, arr.length);
    return sort(mergeSort(first), mergeSort(last));
  }
};

const sort = (first, last) => {
  const sortedArray = [];
  while (first.length !== 0 && last.length !== 0) {
    if (first[first.length - 1] >= last[last.length - 1]) {
      sortedArray.unshift(first.pop());
    } else {
      sortedArray.unshift(last.pop());
    }
  }

  if (first.length > 0) {
    sortedArray.unshift(...first);
  } else if (last.length > 0) {
    sortedArray.unshift(...last);
  }
  return sortedArray;
};

let test = mergeSort([105, 79, 100, 110]);
console.log(test);

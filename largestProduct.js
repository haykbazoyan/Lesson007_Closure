function largeAdjElementsSum(array) {
  res = 0;

  for (let i = 0; i < array.length - 1; i++) {
    let twoElemSum = array[i] * array[i + 1];
    if (res < twoElemSum) {
      res = twoElemSum;
    }
  }
  return res;
}

let numArr = [1, 2, 3, 8, 9, 4, 5, 6, 7];
console.log(largeAdjElementsSum(numArr));

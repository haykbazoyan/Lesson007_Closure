// Given an array of numbers. Find the sum of numbers quadratic which are even.

// with method .filter()

function sumEvenQuadratic(array) {
  let result = 0;
  let evenArray = array.filter((el) => Math.sqrt(el) % 2 === 0);

  for (const key of evenArray) {
    result += key;
  }
  return result;
}

let arrayNum = [9, 16, 25, 36];
console.log(sumEvenQuadratic(arrayNum));

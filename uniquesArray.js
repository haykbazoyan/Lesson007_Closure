// Given an array. Determine whether it consists only from uniques or not.

function findUnique(array) {
  let checker = false;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1 + i; j < array.length; j++) {
      if (array[i] === array[j]) {
        return true;
      }
    }
  }
  return "Uniques";
}

let mixedArray = [null, true, 5, 14, "some text", "hello", 0];
let uniqueArray = [true, 5, 14, "some text", "hello", 0];

console.log(findUnique(uniqueArray));

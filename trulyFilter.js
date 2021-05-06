// Write a function that implements filtering in array

function filterFalsyValues(array) {
  let finalArray = [];

  for (let key of array) {
    if (key) {
      finalArray.push(key);
    }
  }
  return finalArray;
}

const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
console.log(filterFalsyValues(values));
console.log(filterFalsyValues(["hello", 1233, []]));

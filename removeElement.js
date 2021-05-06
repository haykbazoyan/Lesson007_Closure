// Write a function which remove elements with length <= 3

let filterByLength = (array) => {
  let newArray = [];
  for (let key of array) {
    if (key.length > 3) {
      newArray.push(key);
    }
  }
  return newArray;
};

let carNames = ["kia", "tesla", "bmw", "mercedes", "oka", "Ferrari"];
console.log(filterByLength(carNames));

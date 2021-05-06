// Create a function that implements partial sum

let sumTwoNum = (num1) => {
  let innerNumFn = (num2) => {
    return num1 + num2;
  };
  return innerNumFn;
};

console.log(sumTwoNum(1)(3));

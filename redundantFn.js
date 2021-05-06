// Write a function redundant that takes in a string str and returns a function that returns str.

let redundant = (str) => {
  let innerFn = () => {
    return str;
  };
  return innerFn;
};

let f1 = redundant("apple");
let f2 = redundant("pear");
let f3 = redundant(`""`);

console.log(f1());
console.log(f2());
console.log(f3());

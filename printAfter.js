// Create a function printAfter that calls its argument after printing hello world

let printAfter = (pr) => {
  console.log("hello, world");
  pr();
};

const printFn = () => console.log("Elon Musk");

printAfter(printFn);

function add_suffix(suffix) {
  let result = (word) => {
    return word + suffix;
  };
  return result;
}

let add_ly = add_suffix("ly");
console.log(add_ly("hopeless"));

let add_less = add_suffix("less");
console.log(add_less("fear"));

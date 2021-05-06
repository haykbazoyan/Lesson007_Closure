// Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word
// or phrase without a repeating letter.

function isIsogram(string) {
  let strArr = string.split("");

  for (let i = 0; i < strArr.length - 1; i++) {
    for (let j = 1 + i; j < strArr.length; j++) {
      if (strArr[i] === strArr[j]) {
        return `Word or phrase doesn't isogram`;
      }
    }
  }
  return `Isogram word or phrase`;
}

console.log(isIsogram("helo wrd"));

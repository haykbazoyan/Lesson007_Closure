function isPalindrome(string) {
  let strLastIndex = string.length - 1;

  for (let i = 0; i < strLastIndex; i++, strLastIndex--) {
    if (string[i].toLowerCase() !== string[strLastIndex].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("Tenet"));

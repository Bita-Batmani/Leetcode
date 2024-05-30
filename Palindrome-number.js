/**
 * @param {number} x
 * @return {boolean}
 */
let number = -121;

var isPalindrome = function (number) {
  let DefaultString = number.toString().split("").join("");
  let reversedString = number.toString().split("").reverse().join("");

  if (DefaultString === reversedString) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(number));

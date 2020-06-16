// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
// reverseString("hello") should return a string.
function reverseString(str) {
  str = str.split('');
  str.reverse();
  str = str.join('');
  console.log(str);
  return str;
}
reverseString('hello');

// ==============================

// Basic Algorithm Scripting: Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  // let i;
  // let factorializedNum = 1;

  // for (i = 1; i <= num; i++) {
  //   factorializedNum *= i;
  // }
  // return factorializedNum;

  // Second solution
  if (num <= 1) return 1;

  return num * factorialize(num - 1);
}
console.log(factorialize(5));

// ==============================

// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
  let i;
  let longest = '';
  strToArray = str.split(' ');
  // console.log(str)
  for (i = 0; i < strToArray.length; i++) {
    if (strToArray[i].length > longest.length) longest = strToArray[i];
  }
  return longest.length;
}
console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog'),
);

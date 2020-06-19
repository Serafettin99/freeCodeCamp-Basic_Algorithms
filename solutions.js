// 1 - Reverse the provided string.
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

// 2 - Basic Algorithm Scripting: Factorialize a Number
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

// 3 - Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
  let i;
  let longest = '';
  strToArray = str.split(' ');
  for (i = 0; i < strToArray.length; i++) {
    if (strToArray[i].length > longest.length) longest = strToArray[i];
  }
  return longest.length;
}
console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog'),
);

// ==============================

// 4 - Basic Algorithm Scripting: Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  const largestArr = [];
  for (let i = 0; i < arr.length; i++) {
    largestArr.push(Math.max(...arr[i]));
  }
  console.log(largestArr);
  return largestArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

// ==============================

// 5 - Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  let strToArr = str.split('').reverse();
  let targetToArr = target.split('').reverse();
  let amountOfMatchingChars = 0;

  for (let i = 0; i < target.length; i++) {
    if (strToArr[i] === targetToArr[i]) {
      amountOfMatchingChars++;
    }
  }
  if (amountOfMatchingChars === 0) return false;

  return amountOfMatchingChars === target.length ? true : false;
}

console.log(confirmEnding('Bastian', 'an'));

// ==============================

// 6 - Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  let finalStr = '';
  for (let i = 0; i < num; i++) {
    finalStr += str;
  }
  console.log(finalStr);
  return finalStr;
}

repeatStringNumTimes('abc', 3);

// ==============================

// 7 - Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (num >= str.length) return str;

  return str.slice(0, num) + '...';
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));

// ==============================

// 8 - Basic Algorithm Scripting: Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
function findElement(arr, func) {
  return arr.find((num) => (func(num) ? num : undefined));
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// ==============================
// 9 - Basic Algorithm Scripting: Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
  return bool === false || bool === true ? true : false;
}

booWho(null);

// ==============================

// 10 - Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  const strToArr = str.toLowerCase().split(' ');
  const newStr = strToArr
    .map((elm) => elm[0].toUpperCase() + elm.slice(1))
    .join(' ');

  return newStr;
}

titleCase("I'm a little tea pot");

// ==============================

// 11 - Basic Algorithm Scripting: Slice and Splice
// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  const newArr2 = [...arr2];
  return [...arr2.slice(0, n), ...arr1, ...newArr2.splice(n)];
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);

// ==============================
// 12 - Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  const filteredArr = arr.filter((elem) => !!elem !== false);
  return filteredArr;
}
bouncer([7, 'ate', '', false, 9]);

// ==============================
// 13 -Basic Algorithm Scripting: Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  arr.push(num);
  const sortedArr = arr.sort((a, b) => a - b);

  return sortedArr.indexOf(num);
}

getIndexToIns([40, 60], 50);

// ===== Log everyting =====
let log = console.log;

// ===== Verbal Questions =====
// What is the difference between a parameter and an argument?

// Answer: A parameter is a variable in the function definition. An argument is a real value supplied to (passed to) the function. The paramieter are initialized to the value of the arguments it takes in.


// Within a function, what is the difference between return and console.log?

// Answer: return returns some value. console.log prints information to the console and is used for debugging.


// ===== Palindrome =====
const checkPalindrome = (str) => {
  let lowerCaseStr = str.toLowerCase();
  let reverseStr = lowerCaseStr.split('').reverse().join('');
  if (lowerCaseStr === reverseStr) {
    return true;
  } else {
    return false;
  }
}
log(checkPalindrome('Radar'));
log(checkPalindrome("Borscht"));


// ===== Sum Array =====
const sumArray = (arr) => {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
log(sumArray([1, 2, 3, 4, 5, 6]));

// ===== Prime Numbers =====
// Step one.
const checkPrime = (num) => {
  if (num === 2) {
    return true;
  }
  if (num <= 1) {
    return false;
  }
  // Getting rid of even numbers.
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}
log(checkPrime(10)); // false
log(checkPrime(0.4)); // false
log(checkPrime(11)); // true
log(checkPrime(111)); // true

// Step two.
const printPrimes = (num) => {

  for (let i = 0; i <= num; i++) {

  // Needs to be declaired in loop or it stops at 3.
  let notPrime = false;

    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j !== i) {
        notPrime = true;
      }
    }
    if (notPrime === false) {
      log(i);
    }
  }
}
printPrimes(97);



// Rock Paper Scissors

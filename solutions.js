// ===== Verbal Questions =====
// What is the difference between a parameter and an argument?

// Answer: A parameter is a variable in the function definition. An argument is a real value supplied to (passed to) the function. The paramieter are initialized to the value of the arguments it takes in.


// Within a function, what is the difference between return and console.log?

// Answer: return returns some value. console.log prints information to the console and is used for debugging.


// ===== Sum Array =====
const checkPalindrome = (str) => {
  let lowerCaseStr = str.toLowerCase();
  let reverseStr = lowerCaseStr.split('').reverse().join('');
  if (lowerCaseStr === reverseStr) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPalindrome('Radar'));
console.log(checkPalindrome("Borscht"));

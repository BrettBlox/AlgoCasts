// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//awesome, straightforward solution
function palindrome(str) {
  const reversed = str.split('')
  .reverse()
  .join('')

  return reversed === str
}

// //very similar, but using an if statement
// function palindrome(str) {
//   if (str !== str.split('').reverse().join('')){
//     return false
//   }
//   return true
// }
//
// //alt solution using ternary operator instead of if else
// function palindrome(str){
//   return (str !== str.split('').reverse().join('')) ? false :  true
// }
//
// //solution using .every()
// function palindrome(str) {
//   return str.split('').every((el, i) => {
//     return el === str[str.length - i - 1]
//   })
// }





module.exports = palindrome;

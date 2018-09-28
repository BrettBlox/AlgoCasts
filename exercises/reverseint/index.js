// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// //first solution. dope
// function reverseInt(n) {
//   if (n < 0){
//     return -parseInt(n.toString().split('').reverse().join(''))}
//   else {
//     return parseInt(n.toString().split('').reverse().join(''))
//   }
// }
//
// //solution #2 using Math.sign() one liner. better than having two returns and an if else statement
// function reverseInt(n){
//   return parseInt
//   (n.toString()
//   .split('')
//   .reverse()
//   .join('')) * Math.sign(n)
// }

//solution #2 better version. cleaner, easier to read.
function reverseInt(n) {
  let reversed = n
  .toString()
  .split('')
  .reverse()
  .join('')

  return parseInt(reversed) * Math.sign(n)
}
module.exports = reverseInt;

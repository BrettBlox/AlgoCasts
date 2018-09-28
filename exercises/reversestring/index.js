// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// solution #1. easiest solution.
// 1) turn string to array of each character wit .split('')
// 2) reverse the array with .reverse()
// 3) turn back into string with .join('')
// function reverse(str) {
//   return str.split('')
//   .reverse()
//   .join('')
// }

//alt solution #1. Uses for of loop. super cool.
//loops through each character in the str argument being passed,
//then adds that character to the beginning of my empty string variable one by one,
//therby reversing the order of the string being passed in
// function reverse(str) {
//   let string = ''
//   for (let char of str){
//     string = char + string
//   }
//
//   return string
// }


//solution #3. Similar to number 2 but way cooler. uses reduce and ES6. no need for curlies or return because there is only one expression
function reverse(str) {
  return str.split('').reduce((acc, el) => el + acc, '')
}

module.exports = reverse;

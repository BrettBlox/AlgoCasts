// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


//solution. Create empty object, iterate through string being passed to funcion with for of loop
//adding the letters as the keys and the number of times that letter occurs as the values
//now create two helper variables, one set to 0 and the other to an empty string
//iterate over the object with a for in loop, and if the value for each key is greater than our helper variable
//set to zero, that variable becomes the key. in the end we are left with the largest value from our object
//while this is happening, the key for each of those values is being added to our empty string helper variable
//each time so that variable eventually becomes the character that occurs most often.
function maxChar(str) {
  const chars = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    if (!chars[char]){
      chars[char] = 1
    }
    else {
      chars[char]++
    }
  }
  for (let el in chars){
    if (chars[el] > max){
      max = chars[el]
      maxChar = el
    }
  }
  return maxChar
}


//solution with slightly different syntax
// function maxChar(str) {
//   const chars = {}
//   let max = 0
//   let maxChar = ''
//
//   for (let char of str) {
//     chars[char] = chars[char] + 1 || 1
//   }
//
//   for (let el in chars){
//     if (chars[el] > max){
//       max = chars[el]
//       maxChar = el
//     }
//   }
//   return maxChar
// }


module.exports = maxChar;

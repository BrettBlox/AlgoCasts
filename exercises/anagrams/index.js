// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//my solution
// function anagrams(stringA, stringB) {
//   let strA = stringA
//   .replace(/[^\w]/g, '')
//   .split('')
//   .sort()
//   .join('')
//
//   let strB = stringB
//   .replace(/[^\w]/g, '')
//   .split('')
//   .sort()
//   .join('')
//
//   return strA === strB
// }

//better version of my solution with helper function to avoid repeating myself. Beautiful
function anagrams(stringA, stringB){
  return filterStrings(stringA) === filterStrings(stringB)
}

function filterStrings(str){
  return str
  .replace(/[^\w]/g, '')
  .split('')
  .sort()
  .join('')
}
anagrams('brett', 'tterb')

//solution using helper function, creating character map objects and using Object.keys() to see if they are the same length
//then looping through the keys to see if they are the same
// function anagrams(stringA, stringB){
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//     return false
//   }
//   for (let char in aCharMap){
//     if (aCharMap[char] !== bCharMap[char]){
//       return false
//     }
//   }
//   return true
// }
//
// function buildCharMap(str){
//   const charMap = {}
//
//   for (let el of str.replace(/[^\w]/g, '').toLowerCase()){
//     charMap[el] = charMap[el] + 1 || 1
//   }
//   return charMap
// }



module.exports = anagrams;

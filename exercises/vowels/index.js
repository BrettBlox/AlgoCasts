// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//solution #1. pretty simple
function vowels(str) {
    let count = 0
    let vowelCheck = ['a', 'e', 'i', 'o', 'u']
    for (let el of str.toLowerCase()) {
      if (vowelCheck.includes(el)){
        count++
      }
    }
    return count
  }

  vowels('hello there')


//solution #2 using .match, regex and ternary
function vowels(str){
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

module.exports = vowels;

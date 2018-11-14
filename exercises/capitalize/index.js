// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/*Steps for solution #1
1)make an empty array of words
2)split string into array of words separated by spaces
3)for each word in array, uppercase first letter of word,
join first letter with rest of string, push result into words array
join words into string and return */

function captialize(str){
   const arr = []
   for (let el of str.split(' ')){
    arr.push(el[0].toUpperCase() + el.slice(1))
  }
  return arr.join(' ')
}

//my solution using map, charAT, and substring
function capitalize(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((el) => el.charAt(0).toUpperCase() + el.substring(1))
    .join(' ');
}


//solution #2 from video. mine is still better
function captialize(str){
  let result = str[0].toUpperCase()

  for (let i = 1; i < str.length; i++){
    if (str[i - 1] === ' '){
      result += str[i].toUpperCase()
    }
    else {
      result += str[i]
    }
  }
  return result
}



module.exports = capitalize;

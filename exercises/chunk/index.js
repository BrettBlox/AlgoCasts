// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//solution #1
// function chunk(array, size) {
//   //create empty array called chunked to hold chunks
//   const chunked = []
//   //for each element in unchunked array retrieve last el in chunked
//   for (let el of array) {
//     const last = chunked[chunked.length - 1]
//   //if last el doesnt exist or its length is equal to chunk size,
//   //push new chunk into chunked with new element
//     if (!last || last.length === size){
//       chunked.push([el])
//     }
//   //else add current el into chunk
//     else {
//       last.push(el)
//     }
//   }
//   return chunked
// }

//solution #2 I like this one much more. makes more sense in my head
function chunk(array, size) {
  const chunked = []
  let index = 0

  while (index < array.length){
    chunked.push(array.slice(index, index + size))
    index += size
  }
  return chunked
}


module.exports = chunk;

function fibonacci(num) {
  const sequence = [0, 1];

  while (sequence.length <= num) {
    let nextInSequence = sequence[sequence.length - 1] + sequence[sequence.length - 2]
    sequence.push(nextInSequence)
  }
  return sequence[num]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/* {
  const array = [0, 1]
  find last index of array,
    then add the value at that index to the value at the index preceding it,
    then push sum of those 2 values to the array,
    repeat until the number of elements in the array matches 'num'
}
    return array[num - 1] <=== num minus 1 to get the index, since arrays are zero-indexed.
*/

// And a written explanation of your solution
/* The function takes an argument, num,  a number. I need to find the value of the element number within the series.
   But first, I must write the logic for generating a fibonacci sequence...
   First seven values: 0, 1, 1, 2, 3, 5, 8
*/
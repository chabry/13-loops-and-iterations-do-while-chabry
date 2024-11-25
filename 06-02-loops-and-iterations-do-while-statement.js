// doWhileStatement.js

// Function 1
function sumEvenNumbers(limit) {
  // Your code here
  let sum = 0
  let i = 0

  do{
    if(i % 2 == 0){
      sum += i
    }
    i++
  }while(i <= limit)
  return sum
}

// Function 2
function printNumbersBackwards(n) {
  // Implement a function to print numbers from 'n' to 1 in reverse order.
  do{
    console.log(n)
    n--
  }while(n >= 1)
}

// Function 3
function reverseString(str) {
  // Implement a function to reverse the given string.  
  let reversedString = ''
  let i = str.length - 1
  do{
    reversedString += str[i]
    i--
  }while(i >= 0)

  return reversedString
}


// Function 4
function countOccurrences(arr, val) {
  // Implement a function to count occurrences of 'val' in the given array 'arr'.
  let occurrences = 0
  let i = 0
  do{
    if(arr[i] == val){
      occurrences += 1
    }
    i++
  }while(i < arr.length)

  return occurrences
}

countOccurrences([1,2,3,4,2,8,6,2], 2)

module.exports = {
  sumEvenNumbers,
  printNumbersBackwards,
  reverseString,
  countOccurrences,
};

//isArray()
function isArray(input){
    return Array.isArray(input)
}
const students=['Ayo', 'Bukola','Ben','Hussein']
const qoute="if you don't know how to stand, you will stand and fall for nothing"
console.log(isArray(students))
console.log(isArray(qoute))

// clone arr
function cloneArray(arr){
    return [...arr]
}
const scores=[40,80,50,70,90]
const duplicate=cloneArray(scores)
console.log(duplicate)


//slice() is used to slice out the pieces of array
function getFirstElementArray(arr,n){
    return arr.slice(0,n)
}
const no=[[1,3,4],8,9,10]
console.log(getFirstElementArray(no[0],2))
console.log(getFirstElementArray(no,3))
console.log(getFirstElementArray(no[0]))


//functon to return last element of an array
function getLastElementArray(arr,n){
    return arr.slice(-n)
}
console.log(getLastElementArray(no,2))
console.log(getLastElementArray(no[0],1))
console.log(getLastElementArray(no,5))

// Write a simple JavaScript program to join all elements of the following array into a string.
const fruits=["Orange", "Banana", "Apple", "Banana"]
const joinElement=fruits.join(' , ' )
console.log(joinElement)


//Write a function that checks an array of integers contains only prime numbers. It should return false if every number is not prime. Otherwise, return true.
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  function containOnlyPrimes(arr) {
    for (let num of arr) {
      if (!isPrime(num)) {
        return false;
      }
    }
    return true;
  }
const mixednumbers=[2,3,8,9,7,10]
console.log(containOnlyPrimes(mixednumbers))
const numbers=[2,3,5,7]
console.log(containOnlyPrimes(numbers))

//Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

function removeNonValuesFromArray(arr) {
  return arr.filter(function (value) {
    return value !== null && value !== 0 && value !== "" && value !== false && value !== undefined && !Number.isNaN(value);
  });
}
const originalArray=[NaN, 0, 15, false, -22, '',undefined, 47, null]
const filteredArray=removeNonValuesFromArray(originalArray)
console.log(filteredArray)

//Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8

function insertDashesBetweenEvens(inputNumber) {
    const numStr = inputNumber.toString();
    let result = numStr[0];
  
    for (let i = 1; i < numStr.length; i++) {
      if (parseInt(numStr[i - 1]) % 2 === 0 && parseInt(numStr[i]) % 2 === 0) {
        result += '-' + numStr[i];
      } else {
        result += numStr[i];
      }
    }
  
    return result;
  }
  const inputNumber = 25468;
  const dashNumber=insertDashesBetweenEvens(inputNumber)
  console.log(dashNumber)
  const evenNum = 25468;
//Write a JavaScript program to sort the items of an array.
const number=[ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
  number.sort(function ascendingOrder(a,b){
    return a-b
  })
  console.log(number)
//Write a JavaScript program to count the number of arrays inside a given array
  function countArraysInArray(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        count++;
      }
    }
    return count;
  }
  const arrayOfNo=[2,8,[6],3,3,5,3,4,[5,4]]
  console.log(countArraysInArray(arrayOfNo))

  //Write a function that will output the most frequent item in an array.
  function findMostFrequentItem(arr) {
    if (arr.length === 0) {
      return null; 
    }
  
    const itemCounts = {}; 
    let mostFrequentItem = arr[0];
    let maxCount = 1;
  
    for (const item of arr) {
      if (itemCounts[item] === undefined) {
        itemCounts[item] = 1;
      } else {
        itemCounts[item]++;
        if (itemCounts[item] > maxCount) {
          maxCount = itemCounts[item];
          mostFrequentItem = item;
        }
      }
    }
  
    return mostFrequentItem;
  }
  const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(findMostFrequentItem(arr1))


//Write a JavaScript script to empty an array while keeping the origina
function emptyArrayKeepingOriginal(arr) {
    const originalArray = arr.slice(); 
    arr.length = 0; 
    return originalArray; 
  }
  const arr2=[10,20,40,60,70];
  const emptyArr=emptyArrayKeepingOriginal(arr2)
  console.log(arr2)
  console.log(emptyArr)


  //Write a function that removes duplicate items from an array (ignore case sensitivity).

  function removeDuplicatesIgnoreCase(arr) {
    const uniqueItems = {};
    const result = [];
  
    for (const item of arr) {
      const lowerCaseItem = item.toLowerCase();
  
      if (!uniqueItems[lowerCaseItem]) {
        result.push(item);
        uniqueItems[lowerCaseItem] = true;
      }
    }
  
    return result;
  }
  const originalArr=['apple', 'Banana', 'Banana', 'cherry', 'apple', 'date'];
  const duplicateArr=removeDuplicatesIgnoreCase(originalArr)
  console.log(duplicateArr)

  //Write a JavaScript function to shuffle an array.
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
  }
  const myArray=[10,20,15,1,8,2]
  shuffleArray(myArray)
  console.log(myArray)

//There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
  function computeSumOfArr(arr1, arr2) {
    const result = [];
  
    for (let i = 0; i < arr1.length; i++) {
      result.push(arr1[i] + arr2[i]);
    }
    
    return result;
  }
  const num1=[6,7,3,5,6]
  const num2=[1,3,6,4,0]
  console.log(computeSumOfArr(num1,num2))

  //Write a JavaScript function to sort the following array of objects by title value.

  function sortByTitle(arr) {
    return arr.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
  
      if (titleA < titleB) {
        return -1;
      } else if (titleA > titleB) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
 console.log(sortByTitle(library))

 //Write a JavaScript function to find the difference between two arrays.
 function arrayDifference(arr1, arr2) {
    const difference1 = arr1.filter(item => !arr2.includes(item));
    const difference2 = arr2.filter(item => !arr1.includes(item));
    return [...difference1, ...difference2];

  }
  console.log(arrayDifference(num1,num2))

  //Write a JavaScript function that merges two arrays and removes all duplicate elements.
  function mergeAndRemoveDuplicates(arr1, arr2) {
    const mergedArray = arr1.concat(arr2); 
    const uniqueArray = [...new Set(mergedArray)]; 
    return uniqueArray;
  }
  console.log(mergeAndRemoveDuplicates(num1,num2))
  
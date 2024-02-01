"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("CONTENT LOADED");
  // ---------------------
  // Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
  // myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
  // ---------------------

  // Put your answer below -------------------------
  function myFunction(str, i) {
    // Check if i is a non-negative integer
    if (Number.isInteger(i) && i >= 0) {
      // Use Array.from to create a new array of length i with each element set to the provided string
      return Array.from({ length: i }, () => str);
    } else {
      // Handle invalid input for i
      console.error(
        "Invalid input for the second argument. Please provide a non-negative integer."
      );
      return [];
    }
  }

  // Example usage:
  const resultArray = myFunction("sunshine", 3);
  console.log(resultArray); // Output: ['sunshine', 'sunshine', 'sunshine']

  // -----------------------------------------------

  // ---------------------
  // Define a function that takes an array and reverses all the values in an array
  // The function should not mutate the original array
  // ---------------------

  // Put your answer below -------------------------
  function reverseArrayValues(arr) {
    // Use slice() to create a shallow copy of the original array
    const newArray = arr.slice();

    // Use reverse() to reverse the values of the copied array
    newArray.reverse();

    // Return the reversed array
    return newArray;
  }

  // Example usage:
  const originalArray = [1, 2, 3, 4, 5];
  const reversedArray = reverseArrayValues(originalArray);

  console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
  console.log(reversedArray); // Output: [5, 4, 3, 2, 1] (reversed copy of the original array)

  // -----------------------------------------------

  // ---------------------
  // Define a function that takes an array and removes all falsy values from the array
  // ---------------------

  // Put your answer below -------------------------
  function removeFalsyValues(arr) {
    // Use filter() to create a new array with only truthy values
    const filteredArray = arr.filter(Boolean);

    // Return the new array without falsy values
    return filteredArray;
  }

  // Example usage:
  const secondArray = [0, 1, false, true, "", "hello", null, undefined, NaN];
  const newArrayWithoutFalsyValues = removeFalsyValues(originalArray);

  console.log(secondArray); // Output: [0, 1, false, true, '', 'hello', null, undefined, NaN] (original array remains unchanged)
  console.log(newArrayWithoutFalsyValues); // Output: [1, true, 'hello'] (new array without falsy values)

  // -----------------------------------------------

  // ---------------------
  // Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
  // const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
  // returns { name: 'Charlie', color: 'brown', age: 10 };
  // ---------------------

  // Put your answer below -------------------------
  function arraysToObject(nestedArrays) {
    // Initialize an empty object
    const resultObject = {};

    // Iterate through each nested array
    for (const nestedArray of nestedArrays) {
      // Destructure the nested array into key and value
      const [key, value] = nestedArray;

      // Add the key-value pair to the result object
      resultObject[key] = value;
    }

    // Return the resulting object
    return resultObject;
  }

  // Example usage:
  const myArray = [
    ["name", "Charlie"],
    ["color", "brown"],
    ["age", 10],
  ];
  const resultObject = arraysToObject(myArray);

  console.log(resultObject);
  // Output: { name: 'Charlie', color: 'brown', age: 10 }

  // -----------------------------------------------

  // ---------------------
  // Define a function that takes an array and removes duplicate values
  // [1,2,3,4,5,4,3] should return [1,2,3,4,5]
  // ---------------------

  // Put your answer below -------------------------
  function removeDuplicates(arr) {
    // Create a Set from the array to automatically remove duplicates
    const uniqueSet = new Set(arr);

    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);

    // Alternatively, you can use the spread operator:
    // const uniqueArray = [...uniqueSet];

    // Return the array without duplicate values
    return uniqueArray;
  }

  // Example usage:
  const thirdArray = [1, 2, 3, 4, 5, 4, 3];
  const newArrayWithoutDuplicates = removeDuplicates(thirdArray);

  console.log(newArrayWithoutDuplicates);
  // Output: [1, 2, 3, 4, 5]

  // -----------------------------------------------

  // ---------------------
  // Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
  // [1,2,3,4] and [1,2,3,4] should return true
  // [1,2,3,4,5] and [1,2,3,4] should return false
  // [1,2,3,4] and [1,2,3,4,4] should return false
  // [1,2,3,4] and [1,4,3,2] should return true
  // ---------------------

  // Put your answer below -------------------------
  function arraysAreEqual(arr1, arr2) {
    // Check if both arrays have the same length
    if (arr1.length !== arr2.length) {
      return false;
    }

    // Check if every element in arr1 is included in arr2
    return arr1.every((element) => arr2.includes(element));
  }

  // Example usage:
  console.log(arraysAreEqual([1, 2, 3, 4], [1, 2, 3, 4])); // true
  console.log(arraysAreEqual([1, 2, 3, 4, 5], [1, 2, 3, 4])); // false
  console.log(arraysAreEqual([1, 2, 3, 4], [1, 2, 3, 4, 4])); // false
  console.log(arraysAreEqual([1, 2, 3, 4], [1, 4, 3, 2])); // true

  // -----------------------------------------------

  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //            ___  ____  _  ____  ______        //
  //           / _ )/ __ \/ |/ / / / / __/        //
  //          / _  / /_/ /    / /_/ /\ \          //
  //         /____/\____/_/|_/\____/___/          //
  //                                              //
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

  // ---------------------
  // Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
  // [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
  // [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
  // DO NOT USE Array.prototype.flat()
  // ---------------------

  // Put your answer below -------------------------
  function flattenArray(arr) {
    const result = [];

    function flattenHelper(subArray) {
      for (const element of subArray) {
        if (Array.isArray(element)) {
          flattenHelper(element);
        } else {
          result.push(element);
        }
      }
    }

    flattenHelper(arr);
    return result;
  }

  // Test cases
  const fourthArray = [0, 1, 2, [3, 4]];
  const fifthArray = [0, 1, 2, [[[3, 4]]]];

  console.log(flattenArray(fourthArray)); // Output: [0, 1, 2, 3, 4]
  console.log(flattenArray(fifthArray)); // Output: [0, 1, 2, 3, 4]

  // -----------------------------------------------

  // ---------------------
  // Define a function that takes an array and splits it into parts of size i
  // ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
  // ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
  // ---------------------

  // Put your answer below -------------------------
  function splitArray(arr, size) {
    const result = [];

    for (let i = 0; i < arr.length; i += size) {
      const chunk = arr.slice(i, i + size);
      result.push(chunk);
    }

    return result;
  }

  // Test cases
  const array3 = [1, 2, 3, 4];
  const array4 = [1, 2, 3, 4, 5];

  console.log(splitArray(array3, 2)); // Output: [[1, 2], [3, 4]]
  console.log(splitArray(array4, 3)); // Output: [[1, 2, 3], [4, 5]]

  // -----------------------------------------------
});

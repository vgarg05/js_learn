// Arrays in JavaScript

//An array is a special variable, which can hold more than one value at a time.
// It is a data structure that can store a collection of items, such as numbers, strings, or even other arrays. 
// Arrays are ordered, meaning that the items in an array have a specific order and can be accessed using their index.

let fruits=["apple","banana","orange"]; 
// This creates an array named fruits with three string elements: "apple", "banana", and "orange".
console.log(fruits); // ["apple", "banana", "orange"]


let numbers=new Array(1, 2, 3);
// This creates an array named numbers with three numeric elements: 1, 2, and 3.
console.log(numbers); // [1, 2, 3]




//Accessing Array Elements
// You can access individual elements of an array using their index. 
// The index of the first element is 0, the second element is 1, and so on.

console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "orange"



//Modifying Array Elements
// You can modify the elements of an array by assigning a new value to a specific index.

fruits[1] = "grape"; // This changes the second element from "banana" to "grape".
console.log(fruits); // ["apple", "grape", "orange"]



//Shallow Copy of an Array & Deep Copy of an Array
// A shallow copy of an array creates a new array that references the same elements as the original array. 
// A deep copy of an array creates a new array with new elements that are copies of the original elements.

let originalArray = [1, 2, 3];
let shallowCopy = originalArray; // This creates a shallow copy (references the same array)
let deepCopy = [...originalArray]; // This creates a deep copy (new array with copied elements)

shallowCopy[0] = 10; // Modifying the shallow copy will affect the original array
console.log(originalArray); // [10, 2, 3]

deepCopy[0] = 20; // Modifying the deep copy will not affect the original array
console.log(originalArray); // [10, 2, 3]
console.log(deepCopy); // [20, 2, 3]








//Array Methods
// JavaScript provides various methods to manipulate arrays, such as push(), pop(), shift(), unshift(), and more.

fruits.push("kiwi"); // Adds "kiwi" to the end of the array
console.log(fruits); // ["apple", "grape", "orange", "kiwi"]

fruits.pop(); // Removes the last element ("kiwi") from the array
console.log(fruits); // ["apple", "grape", "orange"]

fruits.shift(); // Removes the first element ("apple") from the array
console.log(fruits); // ["grape", "orange"]

fruits.unshift("mango"); // Adds "mango" to the beginning of the array
console.log(fruits); // ["mango", "grape", "orange"]





//splice() method can be used to add or remove elements from an array at a specific index.
//manipute original array and return the removed elements as a new array

fruits.splice(1, 0, "blueberry"); // Adds "blueberry" at index 1 without removing any elements
console.log(fruits); // ["mango", "blueberry", "grape", "orange"]

fruits.splice(2, 1,"chiku"); // Removes 1 element at index 2 ("grape") and adds "chiku"
console.log(fruits); // ["mango", "blueberry", "chiku", "orange"]


let numbersArray = [1, 2, 3, 4, 5,6,7];
numbersArray.splice(1, 2); // Removes 2 elements starting from index 1 (removes 2 and 3)
console.log(numbersArray); // [1, 4, 5, 6, 7]

const numberRemoved = numbersArray.splice(1, 2); // This will remove the elements and return them as a new array
console.log(numberRemoved); // [4, 5] bcause we removed 4 and 5 from the original array
console.log(numbersArray); // [1, 6, 7]






//slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// returns a new array and does not modify the original array

let slicedFruits = fruits.slice(1, 3); // This creates a new array with elements from index 1 to 2 (not including index 3)
console.log(slicedFruits); // ["blueberry", "chiku"]

//question: why shallow copy of an array is created when we use slice() method?
// The slice() method creates a shallow copy of the selected portion of the array because it only copies the references to the elements, not the actual elements themselves. 
// If the elements in the original array are objects or arrays, the sliced array will contain references to those same objects or arrays, meaning that changes to those objects or arrays will affect both the original and sliced arrays. 
// However, if the elements are primitive values (like strings or numbers), they are copied by value, so changes to those values in one array will not affect the other array.

// 🔍 Summary
// Case	                   Behavior
// Primitive values	       Works like deep copy
// Objects / arrays	       Shallow copy (shared reference)

//example of shallow copy with objects
let originalArrayWithObjects = [{ name: "Alice" }, { name: "Bob" },3,4];
let slicedArrayWithObjects = originalArrayWithObjects.slice(0, 3); // This creates a shallow copy of the first three elements
console.log(slicedArrayWithObjects); // [{ name: "Alice" }, { name: "Bob" }, 3]

slicedArrayWithObjects[0].name = "Charlie"; // Modifying the object in the sliced array will affect the original array
slicedArrayWithObjects[2] = 5; // Modifying the primitive value in the sliced array will not affect the original array
console.log(originalArrayWithObjects); // [{ name: "Charlie" }, { name: "Bob" }, 3, 4]
console.log(slicedArrayWithObjects); // [{ name: "Charlie" }, { name: "Bob" }, 5]




//includes() method checks if an array contains a specific element and returns true or false.
console.log(fruits.includes("orange")); // true
console.log(fruits.includes("banana")); // false




//indexOf() method returns the index of the first occurrence of a specified element in an array, or -1 if it is not found.
console.log(fruits.indexOf("chiku")); // 2
console.log(fruits.indexOf("banana")); // -1



//join() method joins all elements of an array into a string, separated by a specified separator.
let fruitString = fruits.join(", ");
console.log(fruitString); // "mango, blueberry, chiku, orange"
console.log(typeof fruitString); // "string"    



//concat() method is used to merge two or more arrays. 
// This method does not change the existing arrays, but instead returns a new array.
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let combinedNumbers = numbers1.concat(numbers2); // This creates a new array that combines numbers1 and numbers2
console.log(combinedNumbers); // [1, 2, 3, 4, 5, 6]










//spread operator (...) can also be used to merge arrays, similar to concat() method.

let combinedNumbersWithSpread = [...numbers1, ...numbers2]; 
// This creates a new array that combines numbers1 and numbers2 using the spread operator
console.log(combinedNumbersWithSpread); // [1, 2, 3, 4, 5, 6]




//flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat(2); // This flattens the array up to a depth of 2
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]

let nestedArrayWithMoreDepth = [1, [2, 3], [4, [5, 6, [7, 8]]]];
let flattenedArrayWithMoreDepth = nestedArrayWithMoreDepth.flat(Infinity); 
// This flattens the array completely, regardless of depth
console.log(flattenedArrayWithMoreDepth); // [1, 2, 3, 4, 5, 6, 7, 8]





//isArray() method checks if a value is an array and returns true or false.
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray("not an array")); // false




//from() method creates a new array from an array-like or iterable object.
let string = "hello";
let arrayFromString = Array.from(string); // This creates an array from the string, where each character becomes an element
console.log(arrayFromString); // ["h", "e", "l", "l", "o"]

let set = new Set([1, 2, 3]);
let arrayFromSet = Array.from(set); // This creates an array from the set, where each element of the set becomes an element in the array
console.log(arrayFromSet); // [1, 2, 3]

//Array from object with length property
let arrayLikeObject = {0: "a", 1: "b", 2: "c", length: 3}; // This is an object that has numeric keys and a length property, making it array-like
let arrayFromObject = Array.from(arrayLikeObject); // This creates an array from the object, where the properties with numeric keys become elements in the array
console.log(arrayFromObject); // ["a", "b", "c"]





//of() method creates a new array instance from a variable number of arguments.
let arrayOfNumbers = Array.of(1, 2, 3); // This creates a new array with the provided arguments as elements
console.log(arrayOfNumbers); // [1, 2, 3]

let arrayOfStrings = Array.of("a", "b", "c"); // This creates a new array with the provided arguments as elements
console.log(arrayOfStrings); // ["a", "b", "c"]

let arrayOfMixed = Array.of(1, "a", true, null); // This creates a new array with the provided arguments as elements
console.log(arrayOfMixed); // [1, "a", true, null]
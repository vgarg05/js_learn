//  ++++++++++++++++ NUMBERS +++++++++++++++++++++
const number=400;
console.log(number); // Output: 400

const balance=new Number(1000);
console.log(balance); // Output: [Number: 1000]
console.log(balance.valueOf()); // Output: 1000 (returns the primitive value of the Number object)

// In JavaScript, numbers are a primitive data type that can be represented in two ways: 
// as a literal (e.g., 400) or as an object (e.g., new Number(1000)). 
// When you create a number using the Number constructor, it creates an object that wraps the primitive value. 
// You can access the primitive value of the Number object using the valueOf() method.

console.log(balance.toString()); // Output: "1000" (converts the Number object to a string)
//it is not inplace method, it returns a new string representation of the Number object without modifying the original Number object

console.log(balance); // Output: [Number: 1000] (the original Number object remains unchanged)

console.log(balance.toFixed(2)); // Output: "1000.00" (formats the number with 2 decimal places)
//toFixed() method returns a string representation of the number with a specified number of decimal places. 
// It does not modify the original Number object, but instead returns a new string representation of the number with the specified formatting.

console.log(balance); // Output: [Number: 1000] (the original Number object remains unchanged)


//toPrecision() method returns a string representation of the number with a specified number of significant digits.
let num = 123.456789;
console.log(num.toPrecision(4)); // Output: "123.5" (formats the number with 4 significant digits)
console.log(num.toPrecision(3)); // Output: "123" (formats the number with 3 significant digits)
console.log(num.toPrecision(2)); // Output: "1.2e+2" (formats the number with 2 significant digits in exponential notation)
console.log(num); // Output: 123.456789 (the original number remains unchanged)

let num2 = 125.556789;  
console.log(num2.toPrecision(4)); // Output: "125.6" (formats the number with 4 significant digits)
console.log(num2.toPrecision(3)); // Output: "126" (formats the number with 3 significant digits)
console.log(num2.toPrecision(2)); // Output: "1.3e+2" (formats the number with 2 significant digits in exponential notation)
console.log(num2); // Output: 125.556789 (the original number remains unchanged)

//toLocaleString() method returns a string representation of the number formatted according to the locale and 
// formatting options specified.
let num3 = 1234567.89;
console.log(num3.toLocaleString()); // Output: "1,234,567.89" (formats the number with commas as thousands separators)
//By default, toLocaleString() uses the system's locale settings to format the number.

console.log(num3.toLocaleString("en-IN")); // Output: "12,34,567.89" (formats the number according to the Indian numbering system)
console.log(num3); // Output: 1234567.89 (the original number remains unchanged)








// ++++++++++++++++++++++ MATH ++++++++++++++++++++++++
// The Math object in JavaScript provides various properties and methods for performing mathematical operations. 
// It is a built-in object that is available globally, so you can use it without needing to create an instance of it.

console.log(Math); // Output: [Math: Math] (the Math object itself)

//Math properties
console.log(Math.PI); // Output: 3.141592653589793 (the value of π)
console.log(Math.E); // Output: 2.718281828459045 (the value of e)

//Math methods
console.log(Math.round(4.7)); // Output: 5 (rounds to the nearest integer)
console.log(Math.round(4.4)); // Output: 4 (rounds to the nearest integer)


console.log(Math.floor(4.7)); // Output: 4 (rounds down to the nearest integer)
console.log(Math.floor(4.4)); // Output: 4 (rounds down to the nearest integer)


console.log(Math.ceil(4.7)); // Output: 5 (rounds up to the nearest integer)
console.log(Math.ceil(4.4)); // Output: 5 (rounds up to the nearest integer)


console.log(Math.sqrt(16)); // Output: 4 (returns the square root of a number)
console.log(Math.sqrt(25)); // Output: 5 (returns the square root of a number)


console.log(Math.pow(2, 3)); // Output: 8 (returns the base raised to the exponent)
console.log(Math.pow(3, 4)); // Output: 81 (returns the base raised to the exponent)


//Using random() method to generate random numbers
console.log(Math.random()); // Output: a random FLOATING-POINT number between 0 (inclusive) and 1 (exclusive)
// Math.random() method returns a random floating-point number between 0 (inclusive) and 1 (exclusive). 

// You can use this method to generate random numbers for various purposes, 
// such as creating random IDs, simulating dice rolls, or generating random colors.

console.log(Math.random() * 10); // Output: a random FLOATING-POINT number between 0 (inclusive) and 10 (exclusive)
// To generate a random number within a specific range, you can multiply the result of Math.random() by the desired range. 
// For example, to generate a random number between 0 and 10, you can multiply Math.random() by 10.

console.log(Math.floor(Math.random() * 10)); // Output: a random INTEGER between 0 (inclusive) and 10 (exclusive)
// To generate a random integer within a specific range, you can use Math.floor() to round down the result of Math.random() multiplied by the desired range. 

//FUNCTION TO GENERATE RANDOM INTEGER BETWEEN MIN AND MAX (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min); // Round up the minimum value to the nearest integer
  max = Math.floor(max); // Round down the maximum value to the nearest integer
  return Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random integer between min and max (inclusive)
}

console.log(getRandomInt(1, 10)); // Output: a random INTEGER between 1 and 10 (inclusive)
console.log(getRandomInt(5, 15)); // Output: a random INTEGER between 5 and 15 (inclusive)


//min() and max() methods return the smallest and largest of zero or more numbers, respectively.
console.log(Math.min(5, 10, 2, 8)); // Output: 2 (returns the smallest number)
console.log(Math.min()); // Output: Infinity (returns Infinity when no arguments are provided)

console.log(Math.max(5, 10, 2, 8)); // Output: 10 (returns the largest number)
console.log(Math.max()); // Output: -Infinity (returns -Infinity when no arguments are provided)
// 🔍 Why?
// Math.max() is designed to return the largest number from the given inputs.

// If no numbers are provided, there’s nothing to compare
// So JavaScript returns the smallest possible value → -Infinity
// This way, if you later compare values, it still works correctly.


console.log(Math.max([1,2,3,4,5])); // Output: NaN (max() does not work with arrays directly)
console.log(Math.max(...[1,2,3,4,5])); // Output: 5 (using the spread operator to pass array elements as individual arguments)




//abs() method returns the absolute value of a number.
console.log(Math.abs(-5)); // Output: 5 (returns the absolute value)
console.log(Math.abs(5)); // Output: 5 (returns the absolute value)



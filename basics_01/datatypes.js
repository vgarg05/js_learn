//In javaScript, data types are used to classify the different types of values that can be stored and manipulated in a program.
// Data types are divided into two main categories: primitive data types and non-primitive (or reference) data types.


// JavaScript has several primitive data types, including number, string, boolean, null, undefined, and symbol.
let number=10;
let string="Hello";
let boolean=true; 
let nullValue=null; // null is a special value that represents the absence of any object value. 
// It is often used to indicate that a variable has no value or that an object property is intentionally empty.
// The typeof operator in JavaScript returns "object" for null, which is a known quirk of the language.

// what is quirk of language?
// A quirk of a programming language refers to an unexpected or unusual behavior that may not be immediately obvious to developers. 
// In the case of JavaScript, the typeof operator returning "object" for null is considered a quirk because 
// null is not actually an object, but rather a primitive value that represents the absence of any object value. 
// This behavior can lead to confusion for developers who may expect typeof null to return "null" instead of "object".


let score; // score is declared but not assigned a value, so it is undefined by default.

let undefinedValue=undefined; 
// undefined is a primitive value that indicates that a variable has not been assigned a value.
// It is also the default value of uninitialized variables and function parameters that are not provided with an argument.
// The typeof operator returns "undefined" for variables that are declared but not assigned a value, 
// and for variables that are explicitly assigned the value undefined.

let symbolValue=Symbol("symbol"); 
// Symbol is a unique and immutable primitive value that can be used as a key for object properties.
//typeof operator returns "symbol" for symbol values.

console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof nullValue);
console.log(typeof undefinedValue);
console.log(typeof symbolValue);


//bigint is a new primitive data type introduced in ES2020 that can represent integers with arbitrary precision.
let bigIntValue=1234567890123456789012345678901234567890n; 
// The "n" at the end of the number indicates that it is a BigInt literal.
console.log(typeof bigIntValue); // output: "bigint"
console.log(bigIntValue); // output: 1234567890123456789012345678901234567890n



//symbols are unique and immutable primitive values that can be used as keys for object properties.
let symbol1=Symbol("description");
let symbol2=Symbol("description");

console.log(symbol1===symbol2); // output: false (each symbol is unique) inspite of having the same description
console.log(typeof symbol1); // output: "symbol"
console.log(typeof symbol2); // output: "symbol"





// Javascript also has non-primitive (or reference) data types, which include objects, arrays, and functions.



// Objects are collections of key-value pairs, where the keys are strings (or symbols) and the values can be of any data type.
let person={
    name:"John",
    age:30,
    isStudent:true
};
console.log(typeof person); // output: "object"



// Arrays are ordered collections of values, which can be of any data type.
let numbers=[1,2,3,4,5];
console.log(typeof numbers); // output: "object"



// Functions are reusable blocks of code that perform a specific task. 
// They can be assigned to variables and passed as arguments to other functions.
function greet(name){
    return "Hello, "+name+"!";
}
console.log(typeof greet); // output: "function"
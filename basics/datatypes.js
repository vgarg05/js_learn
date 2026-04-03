// JavaScript has several primitive data types, including number, string, boolean, null, undefined, and symbol.
let number=10;
let string="Hello";
let boolean=true; 
let nullValue=null; // null is a special value that represents the absence of any object value. 
// It is often used to indicate that a variable has no value or that an object property is intentionally empty.
// The typeof operator in JavaScript returns "object" for null, which is a known quirk of the language.

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
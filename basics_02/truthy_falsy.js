//Example of truthy and falsy values
let value = 0;

if (value) {
    console.log("This will not execute because 0 is a falsy value.");
} else {
    console.log("This will execute because 0 is a falsy value.");
}


// In JavaScript, 

//Falsy values are values that are considered false when evaluated in a boolean context.

//Falsy are:
// 1) false
// 2) 0 (both positive(0) and negative(-0) zero)
// 3) "" (empty string)
// 4) null
// 5) undefined
// 6) NaN
// 7) 0n (BigInt zero) 


//Truthy values are values that are considered true when evaluated in a boolean context.
//(all values that are not falsy are truthy)

// Truthy values include :
// 1) true
// 2) any non-zero number (e.g., 1, -1, 3.14)
// 3) any non-empty string (e.g., "hello", "0","false", " ")
// 4) any object (e.g., {}, [])
// 5) any function
// Types of variables in JavaScript: var, let, and const


let score=36; 
// let is used to declare a variable named score and assign it the value 36. 
// let is block-scoped and can be reassigned but cannot be redeclared within the same scope.
console.log(score); // 36
score=40; // reassigning the value of score to 40
console.log(score); // 40

// let score=50; // This will throw an error because score has already been declared in the same scope. 


{
    let score=50; // This is allowed because it is in a different block scope.
    console.log(score); // 50
}



const pi=3.14; // const is used to declare a constant named pi and assign it the value 3.14. 
// Constants cannot be reassigned after they are declared.



var userName="John"; 
// var is used to declare a variable named userName and assign it the value "John". 
// var is function-scoped and can be redeclared and reassigned.
console.log(userName); // John


// example of var being redeclared and reassigned
var userName="Doe"; // redeclaring userName
console.log(userName); // Doe

userName="Smith"; // reassigning userName
console.log(userName); // Smith

// var can lead to issues with hoisting and scope, 
// so it is generally recommended to use let and const instead of var in modern JavaScript development.





//Javascript is dynamically typed, which means that variables can hold values of any data type 
// and can change their type at runtime.
let dynamicVariable=42; // dynamicVariable is assigned a number
console.log(dynamicVariable); // 42

dynamicVariable="Now I'm a string"; // dynamicVariable is reassigned to a string
console.log(dynamicVariable); // Now I'm a string

dynamicVariable=true; // dynamicVariable is reassigned to a boolean
console.log(dynamicVariable); // true   
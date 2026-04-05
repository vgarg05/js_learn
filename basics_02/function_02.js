//Types of Functions in JavaScript


// +++++++++++++++++ 1. Function Declaration +++++++++++++++++++

// A function declaration is a named function that is defined using the function keyword.
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!





// +++++++++++++++++ 2. Function Expression ++++++++++++++++++

// A function expression is a function that is assigned to a variable.
// Function expressions can be anonymous (without a name) or named.

//Anonymous function expression
const greetExpression = function(name) {
    return `Hi, ${name}!`;
};
console.log(greetExpression("Bob")); // Output: Hi, Bob!

//Named function expression
const greetNamedExpression = function greet(name) {
    return `Hey, ${name}!`;
};
console.log(greetNamedExpression("Charlie")); // Output: Hey, Charlie!





// +++++++++++++++++ 3. Arrow Function +++++++++++++++++++

// Arrow functions are a more concise syntax for writing function expressions. 
// They do not have their own 'this' context and are always anonymous.



const greetArrow = (name) => {
    return `Hello, ${name}!`;
};
console.log(greetArrow("Dave")); // Output: Hello, Dave!




// Concise body syntax for single expression
const greetConcise = name => `Hi, ${name}!`;  
//Impilicit return: If the function body consists of a single expression, you can omit the curly braces and the return keyword. 
// The result of the expression will be returned automatically.
console.log(greetConcise("Eve")); // Output: Hi, Eve!



//Important Concept
const add = (a, b) => a + b; // Implicit return
//const add = (a, b) =>  (a + b); // Implicit return with parentheses for clarity
//const add = (a, b) => { a + b }; // No return, will return undefined
//const add = (a, b) => { return a + b; }; // Explicit return

console.log(add(5, 3)); // Output: 8



//Want to return an object from an arrow function, you need to wrap the object literal in parentheses to avoid syntax errors.
const user=(name,age)=>({nameUser:name,ageUser:age}); 
console.log(user("John", 30)); // Output: { nameUser: 'John', ageUser: 30 }







//++++++++++++++++++++++++++ 4. Immediately Invoked Function Expression (IIFE) +++++++++++++++++++++++++++

// An IIFE is a function that is defined and immediately executed. 
// It is often used to create a new scope and avoid polluting the global namespace.


/*
+++++++++++++++++ Pollution of Global Namespace ++++++++++++++++++++

What is pollution of global namespace?
Pollution of the global namespace occurs when too many variables, functions, or objects are defined in the global scope. 
This can lead to naming conflicts and unintended consequences, as different parts of the code may accidentally overwrite each other's variables or functions. 
Using IIFEs helps to prevent this by creating a new scope for the variables and functions defined within the IIFE, keeping them separate from the global scope.

*/


 //Syntax: (function definition)() ,second pair of parentheses is for invoking the function immediately after its definition.


//Named IIFE
(function greet(name) {
    console.log(`Hello, ${name}!`);
})("Frank"); // Output: Hello, Frank!


// Anonymous IIFE
(function() {
    console.log("This is an IIFE!");
})(); // Output: This is an IIFE!

// semicolon is important after the IIFE to prevent issues when concatenating scripts or when the previous code does not end with a semicolon.




//Annonymous IIFE 

// IIFEs can also be written using arrow function syntax
(() => {
    console.log("This is an IIFE using arrow function! ");
})(); 
// Output: This is an IIFE using arrow function! 



/*
+++++++++++++++++++++ Note +++++++++++++++++++++
🔥 Key Point
- Function Declaration: A named function defined using the function keyword.
- Function Expression: A function assigned to a variable, can be anonymous or named.
- Arrow Function: A concise syntax for writing function expressions, does not have its own 'this' context.
- IIFE: A function that is defined and immediately executed, used to create a new scope and avoid polluting the global namespace.

*/
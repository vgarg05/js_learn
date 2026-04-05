// ++++++++++++++++++++++++++++ Functions ++++++++++++++++++++++++++++
// A function is a reusable block of code that performs a specific task. 
// It can take inputs (parameters) and return an output (result). 
// Functions help to organize code, make it more readable, and avoid repetition.



// Function declaration
function add(a, b) { // 'a' and 'b' are parameters
    return a + b;
}
// Using the functions
console.log(add(5, 3));  // Output: 8 , here 5 and 3 are arguments passed to the function



function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob");   // Output: Hello, Bob!



// Returning values from functions
function square(x) {
    return x * x; // Returns the square of the input
}

let result = square(4); // result will be 16
console.log("The square of 4 is: " + result); // Output: The square of 4 is: 16


//Default parameters
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!



//Checking if username is empty or undefined
function validateUsername(username) {
    if (!username) {
        return "Username cannot be empty.";
    }
    return "Username is valid.";
}

console.log(validateUsername("")); // Output: Username cannot be empty.
console.log(validateUsername("Alice")); // Output: Username is valid.






//rest parameters
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
//Syntax: function functionName(...restParameter) { // code }

function sum(...numbers) {
    return numbers;
}

console.log(sum(1, 2, 3)); // Output: [1, 2, 3]
console.log(sum(4, 5));    // Output: [4, 5]
console.log(sum());         // Output: []


function multiply(val1, val2, ...args) {
    // val1 and val2 are regular parameters, val1=2 and val2=3 in this example.
    // while args is a rest parameter that collects the remaining arguments into an array.
    return args;
}

console.log(multiply(2, 3, 4, 5)); // Output: [4, 5]
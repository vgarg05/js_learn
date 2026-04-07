//Global and Local Scope


// Global Scope
//means that a variable is accessible from anywhere in the code, including inside functions and blocks. 
// Variables declared in the global scope are available throughout the entire program.
var globalVar = "I am a global variable";

function globalScopeExample() {
    console.log(globalVar); // Accessing global variable inside a function
}

globalScopeExample(); // Output: I am a global variable
console.log(globalVar); // Output: I am a global variable






// Local Scope
//means that a variable is only accessible within the block, function, or module where it is declared. 
// Variables declared in a local scope cannot be accessed from outside that scope.
function localScopeExample() {
    let localVar = "I am a local variable";
    console.log(localVar); // Accessing local variable inside the function
}

localScopeExample(); // Output: I am a local variable
// console.log(localVar); // This will throw an error because localVar is not accessible outside the function





// Block Scope
// Block scope is a type of local scope that applies to variables declared with let and const within a block (enclosed by curly braces {}). 
// Variables declared with var do not have block scope and are instead function-scoped.
{
    let blockScopedVar = "I am block scoped";
    console.log(blockScopedVar); // Output: I am block scoped
}
// console.log(blockScopedVar); // This will throw an error because blockScopedVar is not accessible outside the block









// Good example of scope in JavaScript

function one(){
    let userName="Ram";
    function two(){
        let email="ram@example.com";
        console.log(userName); // Ram
    }
    // console.log(email); 
    // This will throw an error because email is not accessible in the scope of function one
    
    two();
}

one();



// ++++++++++++++Interesting example of scope in JavaScript++++++++++++++

console.log(addOne(5)); 
// This will not throw an error because addOne is a function declaration and is hoisted to the top of its scope, 
// making it accessible before its definition in the code. 


//hoisted means that the function declaration is moved to the top of its scope during the compilation phase, 
// allowing it to be called before it is defined in the code.
function addOne(num1){
    let result=num1+1;
    return result;
}

console.log(addOne(5)); // Output: 6







//console.log(addTwo(5)); 
// This will throw an error because addTwo is a function expression assigned to a constant variable, 
// and it is not hoisted. Therefore, it cannot be accessed before its definition in the code.

const addTwo=(num2)=>{
    let result=num2+2;
    return result;
}

console.log(addTwo(5)); // Output: 7
//Flow of execution in JavaScript

//1. Global Execution Context Creation: 
// This is the first phase where the JavaScript engine creates a global execution context. 
// It sets up the global object and the 'this' keyword. 


//2. Memory allocation for variables and functions: 
// During the global execution context creation, memory is allocated for variables and functions, but they are not yet assigned values.
// Variables are hoisted and initialized with undefined, while function declarations are hoisted with their entire function body.
//Hoisted means that the variable and function declarations are moved to the top of their containing scope during the compilation phase, allowing them to be accessed before their actual declaration in the code.


//3. Code execution starts from the top of the file
//In this phase, the JavaScript engine starts executing the code line by line.
//When it encounters a function call, it creates a new execution context for that function and pushes it onto the call stack.

//4. Function Execution Context Creation: 
//When a function is called, a new execution context is created for that function. 
//This includes setting up a new variable environment, creating an 'arguments' object, and determining the value of 'this'.
//Same process of memory allocation happens for variables and functions within the function execution context, then the code inside the function is executed line by line.

//5. Returning from function: 
//When a function finishes executing, it returns a value (if specified) and the execution context for that function is popped off the call stack, returning control to the previous execution context.

//6. End of Global Execution Context: 
//Once all code has been executed and there are no more functions to execute, the global execution context is also popped off the call stack, and the program ends.







// ++++++++++++++++++++++++++ ChatGPT Version ++++++++++++++++++++++++++++

/* 
JavaScript Code Execution Phases
1. Memory Creation Phase (Creation Phase)
2. Code Execution Phase

*/

//Example:
var a = 10;
var b = 20;

function add(){
    var c = 30;
    console.log(a+b+c);
}

add();


/*

//Steps of Flow of Execution in JavaScript for the above code

//Step 1: Memory Creation Phase

JavaScript scans the whole code and allocates memory

Variable	 Memory
a	         undefined
b	         undefined
add	       function code

So memory looks like:

a → undefined  
b → undefined  
add → function(){...}


//Step 2: Code Execution Phase

Now JavaScript executes line by line:


//Line 1
var a = 10;

Now:
a → 10


//Line 2
var b = 20;
b → 20



//Function Call
add();

Now new execution context is created

Inside function:

//Memory Phase (Function)
c → undefined

//Execution Phase (Function)
c = 30
console.log(a+b+c)

//Output: 60




// Execution Context Stack (Call Stack)

Execution order:

Global Execution Context (created first)
        ↓
Function Execution Context (add)
        ↓
Function removed after execution
        ↓
Back to Global




//Very Important Concept

JavaScript runs inside: 👉 Execution Context

There are 3 types:

1.Global Execution Context
2.Function Execution Context
3.Eval Execution Context (rare)




// Visual Flow of Flow of Execution in JavaScript

Start Program
     ↓
Create Global Execution Context
     ↓
Memory Creation Phase
     ↓
Execution Phase
     ↓
Function Call → New Execution Context
     ↓
Execute Function
     ↓
Remove Function Context
     ↓
Program End



//Interview Definition (Short)

JavaScript executes code in two phases: memory creation phase (hoisting) and execution phase, using execution contexts and call stack. 

*/











//Let's go step-by-step and understand How JavaScript executes below code.

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

/*
//Step-by-Step Execution Flow

//Step 1 — Global Execution Context Created

JavaScript creates Global Execution Context and starts Memory Creation Phase

Memory Phase (Hoisting)

Memory allocated like this:

Variable	   Value
val1	       uninitialized
val2	       uninitialized
addNum	     function definition
result1	     uninitialized
result2	     uninitialized


//Step 2 — Execution Phase Starts

//Line 1
let val1 = 10

Now: val1 → 10

//Line 2
let val2 = 5

Now: val2 → 5


//Line 3-6 (Function Declaration)
function addNum(num1, num2)

Already stored in memory
Nothing executed yet.


//Step 3 — Function Call (First Time)
let result1 = addNum(val1, val2)

This becomes: addNum(10, 5)

Now JavaScript: 👉 Creates New Function Execution Context

//Inside Function (First Call)
1. Memory Phase (Function)
Variable	Value
num1	    10
num2	    5
total	    uninitialized

2.Execution Phase
let total = num1 + num2
total = 15
return total

Returns: 15

So:
result1 = 15

=>Function Execution Context removed from stack.

//Step 4 — Function Call (Second Time)
let result2 = addNum(10, 2)

Again new Function Execution Context created

1. Memory Phase (Function)
Variable	Value
num1			10
num2			2
total			uninitialized

2. Execution Phase
total = 10 + 2
total = 12

Return: 12

So:
result2 = 12


// Final Memory
val1 = 10
val2 = 5
result1 = 15
result2 = 12



// +++++++++ Call Stack Visualization +++++++++

Global Execution Context
        ↓
addNum() (First Call)
        ↓
Return (Removed)
        ↓
addNum() (Second Call)
        ↓
Return (Removed)
        ↓
Global Execution Context


// +++++++++ One Important Concept Here +++++++++++++++++++

Every function call creates a new execution context

So:

addNum() → new memory every time

This is why:

First call uses 10,5
Second call uses 10,2

*/





//Let's visualize this step-by-step using Execution Context Diagram and Call Stack Animation.

//Your Code:

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)


/*
1. Execution Context Diagram

//Global Execution Context (After Memory Phase)
Global Execution Context
-------------------------
val1      → <uninitialized>
val2      → <uninitialized>
addNum    → function {...}
result1   → <uninitialized>
result2   → <uninitialized>

//After Execution Phase (Before Function Calls)
Global Execution Context
-------------------------
val1      → 10
val2      → 5
addNum    → function {...}
result1   → <uninitialized>
result2   → <uninitialized>


//First Function Execution Context

When this runs:

addNum(val1, val2)

//New Execution Context Created:

//Function Execution Context (addNum)
-----------------------------------
num1   → 10
num2   → 5
total  → <uninitialized>

//Execution:
total = 10 + 5
total = 15
return 15

//Now:
result1 = 15

//Function context removed.




//Second Function Execution Context

When this runs:
addNum(10, 2)

//Function Execution Context (addNum)
-----------------------------------
num1   → 10
num2   → 2
total  → <uninitialized>

//Execution:
total = 10 + 2
total = 12
return 12

Now:
result2 = 12




2. +++++++++++++ Call Stack Animation ++++++++

// Step 1 — Start

Call Stack
-----------
Global()

//Step 2 — First Function Call

Call Stack
-----------
addNum()
Global()

//Step 3 — Function Returns

Call Stack
-----------
Global()

//Step 4 — Second Function Call

Call Stack
-----------
addNum()
Global()

//Step 5 — Function Returns

Call Stack
-----------
Global()

//Step 6 — Program Ends

Call Stack
-----------
(empty)


//Final Memory State
val1 = 10
val2 = 5
result1 = 15
result2 = 12
*/
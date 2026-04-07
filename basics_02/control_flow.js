//Control of flow In JavaScript

//Control flow refers to the order in which individual statements, instructions, or function calls are executed or evaluated in a programming language. 
//In JavaScript, control flow is determined by various constructs such as conditionals, loops, and function calls.


//1. Conditional Statements
//Conditional statements allow you to execute different blocks of code based on certain conditions. 
//The most common conditional statements in JavaScript are if, else if, and else. 
// switch is also a conditional statement that allows you to execute different blocks of code based on the value of a variable or expression.


//The if statement evaluates a condition and executes the block of code if the condition is true.
//The else if statement allows you to specify a new condition to test if the previous condition was false.
//The else statement executes a block of code if all previous conditions were false.

if(true) {
    console.log("This will always execute.");
}

if (false) {
    console.log("This will never execute.");
}



//Example of if...else if...else statement
let age = 25;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}





//switch statement is used to perform different actions based on different conditions.
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}
//if we forget to add break statement, it will execute all the cases 
// after the matched case until it finds a break statement or reaches the end of the switch statement.




//2. Loops
//Loops allow you to execute a block of code repeatedly as long as a specified condition is true. 
//The most common loops in JavaScript are for, while, and do...while.


//For loop is used when the number of iterations is known beforehand. 
// It consists of three parts: initialization, condition, and increment/decrement.
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}


//While loop is used when the number of iterations is not known and 
// the loop needs to continue until a certain condition is met.
let j = 0;
while (j < 5) {
    console.log("While Iteration: " + j);
    j++;
}


//Do...While loop is similar to the while loop, but it guarantees that the block of code will be executed at least once, 
// even if the condition is false at the beginning.
let k = 0;
do {
    console.log("Do...While Iteration: " + k);
    k++;
} while (k < 5);




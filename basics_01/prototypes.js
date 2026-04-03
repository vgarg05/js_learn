//What is prototype in JavaScript?

//In JavaScript, a prototype is an object that is associated with every function and object by default. 
// It serves as a blueprint for creating new objects and provides 
// shared properties and methods to all instances of that object.

// When you create a new object in JavaScript, it inherits properties and methods from its prototype. 
// This allows you to create new objects that have the same properties and methods as the prototype, 
// without having to define them for each individual object.

// For example, the String prototype provides various methods for working with strings, 
// such as toUpperCase(), toLowerCase(), length, indexOf(), substring(), replace(), and many more. 
// When you create a string in JavaScript, it inherits these methods from the String prototype, 
// allowing you to manipulate and work with strings easily.


// Every JavaScript object has a prototype, which is another object that it inherits properties and methods from. 


//Example of String prototype
let str1 = "Hello World";
console.log(str1.toUpperCase()); // Output: HELLO WORLD
// toUpperCase() is a method that is inherited from the String prototype

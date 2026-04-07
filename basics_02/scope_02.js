const user={
    name:"John",
    age:30,
    sayHi:function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log(this); // this refers to the user object
    }
}

user.sayHi(); // Output: Hello, my name is John and I am 30 years old.

user.name = "Alice";
user.age = 25;
user.sayHi(); // Output: Hello, my name is Alice and I am 25 years old.




console.log(this); // In the global scope, 'this' refers to the global object 
//Here, 'this' will refer to the global object, which is not the user object. 
//this is {} empty object because we are in a Node.js file, and in the global context of a Node.js file, 
// 'this' refers to module.exports, which is an empty object by default.



/*
++++++++++++++++ The Global Context ++++++++++++++++

When you run console.log(this); outside of any function or object:

In a Browser: this refers to the window object.

In Node.js: this refers to module.exports (an empty object {} by default) if you are in a module or file, or the global object if you are in a REPL.

+++++++++++++++++ Note ++++++++++++++++++++
🔥 Key Point
Environment	          this refers to
Browser	              window
Node REPL	            global
Node file	           {} (module.exports)


+++++++++++++++ What is REPL? +++++++++++++++++
REPL stands for Read-Eval-Print Loop. It is an interactive programming environment that takes user input, 
evaluates it, and returns the result. 

In Node.js, you can start a REPL session by simply running node in your terminal without any arguments. 

This allows you to execute JavaScript code line by line and see the results immediately.

*/





// If we assign the method to a variable and call it, 'this' will be undefined
const sayHiFunction = user.sayHi;
sayHiFunction(); // Output: Hello, my name is undefined and I am undefined years old. (in strict mode, this will be undefined)
// console.log(this);  which is inside function
// In this case, 'this' will refer to the global object, not the user object.

/* Now, global object is:

<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]
}
*/
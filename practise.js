const user = {
  name: "Gemini",
  greet: () => {
    console.log(this); 
    // In an arrow function, 'this' is lexically bound to the surrounding context. 
    //here surrounding context is not object bz
    // Since 'greet' is defined as an arrow function, 'this' will refer to the global object (window in browsers, global in Node.js) rather than the 'user' object.
    console.log(`Hello, my name is ${this.name}!`); 
    // Since 'this' does not refer to the 'user' object, 'this.name' will be undefined, resulting in the output: "Hello, my name is undefined!"
  }
};

user.greet(); // undefined!
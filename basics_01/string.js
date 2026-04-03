//String in JavaScript

//String is a sequence of characters. It is used to store and manipulate text. 
// In JavaScript, strings are immutable, which means that once a string is created, 
// it cannot be changed. 
// However, you can create a new string by concatenating two or more strings together.
let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2; // concatenation of str1 and str2
console.log(str3); // Output: Hello World

//You can also use template literals to create strings in JavaScript.
let name = "John";
let age = 30;
let str4 = `My name is ${name} and I am ${age} years old.`; // using template literals
console.log(str4); // Output: My name is John and I am 30 years old.

//Strings in JavaScript have many built-in methods that allow you to manipulate and work with them. 
// Some common string methods include:
let str5 = "Hello World";

//toUpperCase() - converts a string to uppercase
console.log(str5.toUpperCase()); // Output: HELLO WORLD

//toLowerCase() - converts a string to lowercase
console.log(str5.toLowerCase()); // Output: hello world

//length - returns the length of a string
console.log(str5.length); // Output: 11

//indexOf() - returns the index of the first occurrence of a specified value in a string
console.log(str5.indexOf("World")); // Output: 6
console.log(str5.indexOf("W")); // Output: 6
console.log(str5.indexOf("o")); // Output: 4 (first occurrence of "o" is at index 4)







//substring() - returns a portion of a string between two specified indices
console.log(str5.substring(0, 5)); // Output: Hello
console.log(str5.substring(-8,4)); 
// start is -8, which is treated as 0
// end is 4, which is valid
// Since start (0) is less than end (4), it returns the substring from index 0 to index 4, which is "Hell".

console.log(str5.substring(4, -8));
// start is 4, which is valid
// end is -8, which is treated as 0
// Since start (4) is greater than end (0), JavaScript swaps them
// After swapping, start becomes 0 and end becomes 4
// Therefore, it returns the substring from index 0 to index 4, which is "Hell".

console.log(str5.substring(5,0)); // Output: Hello (JavaScript swaps the indices if start > end)

// 🔍 What happens here?

// The substring(start, end) method in JavaScript behaves like this:

// If start < 0, it is treated as 0
// If end < 0, it is also treated as 0
// If start > end, JavaScript swaps them







//slice() - returns a portion of a string between two specified indices 
// (similar to substring(), but can also accept negative indices)
console.log(str5.slice(0, 5)); // Output: Hello
console.log(str5.slice(-8,4)); // Output: l
// (negative index -8 counts from the end of the string, so it starts at index 3 and ends at index 4)

// 📌 Rules of slice():
//🔍 Key concept: slice(start, end)
// If start is negative → it counts from the end of the string
// Formula:
// 👉 start = length + start
// If end is negative → it also counts from the end of the string
// Formula:
// 👉 end = length + end
// If start > end → result is empty string (❗ no swapping like substring)


console.log(str5.slice(-5)); // Output: World (last 5 characters of the string)
console.log(str5.slice(-8, 7)); // Output:lo W 
// (negative index -8 counts from the end of the string, so it starts at index 3 and ends at index 7)

console.log(str5.slice(2, -7)); // Output: ll 
// (start at index 2 and end at index 4, since -7 counts from the end of the string which is index 4)

console.log(str5.slice(-2, -7)); // Output: "" 
// (start index -2 is greater than end index -7, so it returns an empty string)

console.log(str5.slice(-9, -7)); // Output: "ll"
// (start index -9 counts from the end of the string which is index 2, 
// and end index -7 counts from the end of the string which is index 4, 
// so it returns the substring from index 2 to index 4, which is "ll")






//includes() - checks if a string contains a specified value and returns true or false
console.log(str5.includes("World")); // Output: true
console.log(str5.includes("world")); // Output: false (case-sensitive)
console.log(str5.includes("o")); // Output: true (checks for the presence of "o" in the string)



//split() - splits a string into an array of substrings based on a specified separator
console.log(str5.split(" ")); // Output: ["Hello", "World"]





//replace() - replaces a specified value with another value in a string
console.log(str5.replace("World", "JavaScript")); // Output: Hello JavaScript

// url replace %20 with -
let url = "https://www.example.com/search?q=javascript%20string%20methods";
let modifiedUrl = url.replace(/%20/g, "-"); // using regular expression to replace all occurrences of %20 with -
console.log(modifiedUrl); // Output: https://www.example.com/search?q=javascript-string-methods




//trim() - removes whitespace and newline characters from both ends of a string
let str8 = "   Hello World   ";
console.log(str8.trim()); // Output: Hello World (whitespace removed from both ends)

let str9 = "   Hello World\n";
console.log(str9.trim()); // Output: Hello World (whitespace and newline character removed from both ends)


//In summary, strings are an important data type in JavaScript that 
// allow you to store and manipulate text. 
// They have many built-in methods that make it easy to work with them and 
// perform various operations.





//Another method of creating a string in JavaScript is by using the String constructor.
let str6 = new String("Hello World"); // using the String constructor
console.log(str6); // Output: [String: 'Hello World']

//However, it is generally recommended to use string literals (i.e., using quotes) 
// instead of the String constructor, as it is more concise and easier to read. 


// Additionally, using the String constructor can lead to unexpected behavior, 
// as it creates a string object rather than a primitive string value.
console.log(typeof str5); // Output: string (primitive string value)
console.log(typeof str6); // Output: object (string object)



//Accessing characters in a string can be done using bracket notation or the charAt() method.
let str7 = "Hello World";

//Using bracket notation
console.log(str7[0]); // Output: H
console.log(str7[6]); // Output: W

//Using charAt() method
console.log(str7.charAt(0)); // Output: H
console.log(str7.charAt(6)); // Output: W

//Access prototype of string
console.log(str7.__proto__); // Output: String.prototype




// In JavaScript, all objects have a prototype,which is an object that 
// provides shared properties and methods to all instances of that object. 

// The String prototype provides various methods for working with strings, 
// such as toUpperCase(), toLowerCase(), length, indexOf(), substring(), replace(), and many more. 

// When you create a string in JavaScript, it inherits these methods from the String prototype, 
// allowing you to manipulate and work with strings easily.

let str = new String("Hello");
// 🔍 What actually happens internally:
// new String("Hello") creates a String object using the String constructor (class-like function)
// This object is linked to String.prototype
// So it gets access to methods like:
// .toUpperCase()
// .slice()
// .substring()



//Does primitive string have prototype?

//In JavaScript, primitive strings do not have a prototype. 
// However, when you access a property or method on a primitive string, 
// JavaScript automatically wraps the primitive string in a String object, 
// which does have a prototype.


console.log(str7.toUpperCase()); // Output: HELLO WORLD
// JavaScript will create a temporary String object from the primitive string str7, 
// call the toUpperCase() method on that object, and then discard the temporary object. 
// This is why you can use string methods on primitive strings in JavaScript, 
// even though they do not have a prototype themselves.

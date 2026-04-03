//example of operators in JavaScript

//arithmetic operators
let a=10;
let b=5;

console.log(a+b); // addition, output: 15
console.log(a-b); // subtraction, output: 5
console.log(a*b); // multiplication, output: 50
console.log(a/b); // division, output: 2
console.log(a%b); // modulus, output: 0


//operator precedence
console.log(1 + 2 * 3); // output: 7 (multiplication has higher precedence than addition)
console.log((1 + 2) * 3); // output: 9 (parentheses change the order of operations, so addition is performed before multiplication)
console.log(10 / 2 + 5); // output: 10 (division has higher precedence than addition)
console.log(10 / (2 + 5)); // output: 1.4285714285714286 (parentheses change the order of operations, so addition is performed before division)

// operator precedence order from highest to lowest:
// 1. Parentheses ()
// 2. Exponentiation (**)
// 3. Multiplication (*), Division (/), Modulus (%)
// 4. Addition (+), Subtraction (-)
// 5. Assignment (=, +=, -=, etc.)
// 6. Comparison (==, !=, >, <, >=, <=)
// 7. Logical (&&, ||, !)
// It is important to understand operator precedence to ensure that expressions 
// are evaluated in the intended order and to avoid unexpected results in your code.

//It is always a good practice to use parentheses to make the order of operations clear, 
// especially in complex expressions, to avoid confusion and ensure that the code behaves as intended.





//assignment operators
let c=20;
c+=5; // equivalent to c = c + 5
console.log(c); // output: 25

c-=10; // equivalent to c = c - 10
console.log(c); // output: 15

c*=2; // equivalent to c = c * 2
console.log(c); // output: 30

c/=3; // equivalent to c = c / 3
console.log(c); // output: 10


//Important note
let f=10;
let d=f++; // equivalent to d = f; f = f + 1
console.log(d); // output: 10 (d gets the value of f before incrementing)
console.log(f); // output: 11 (f is now incremented)

let e=++f; // equivalent to f = f + 1; e = f
console.log(e); // output: 12 (f is incremented first, then e gets the new value of f)
console.log(f); // output: 12 (f is now incremented)




//comparison operators
console.log(a==b); // equality, output: false
console.log(a!=b); // inequality, output: true
console.log(a>5); // greater than, output: true
console.log(a<15); // less than, output: true
console.log(a>=10); // greater than or equal to, output: true
console.log(a<=10); // less than or equal to, output: true


//difference between == and ===
let num1=5; // number
let str1="5"; // string

console.log(num1==str1); // loose equality, output: true (type coercion occurs)
console.log(num1===str1); // strict equality, output: false (no type coercion, different types)



//difference between != and !==
console.log(num1!=str1); // loose inequality, output: false (type coercion occurs)
console.log(num1!==str1); // strict inequality, output: true (no type coercion, different types)


//Important
console.log(null==undefined); // loose equality, output: true (null and undefined are considered equal in loose equality)
console.log(null===undefined); // strict equality, output: false (null and undefined are different types, so they are not equal in strict equality)
console.log("2">1); // output: true (the string "2" is converted to the number 2 for the comparison)
console.log("02"<1); // output: false (the string "02" is converted to the number 2 for the comparison)
console.log("2"==2); // output: true (the string "2" is converted to the number 2 for the comparison)
console.log("2"===2); // output: false (no type coercion, different types)
console.log(null>0); // output: false (null is converted to 0 for the comparison, so the comparison is 0 > 0, which is false)
console.log(null<0); // output: false (null is converted to 0 for the comparison, so the comparison is 0 < 0, which is false)
console.log(null==0); // output: false (null is not equal to 0 in either loose or strict equality)
console.log(null>=0); // output: true (null is converted to 0 for the comparison, so the comparison is 0 >= 0, which is true)
console.log(null<=0); // output: true (null is converted to 0 for the comparison, so the comparison is 0 <= 0, which is true)
// why == && >= behaves differently with null?
// In JavaScript, the behavior of null in comparisons can be a bit confusing due to type coercion rules. 
// When using the loose equality operator (==), 
// null is considered equal to undefined, but not equal to any other value, including 0. 
// However, when using comparison operators like >= or <=, null is converted to 0 for the comparison. 
// This is why null == 0 is false (because null is not equal to 0), but null >= 0 and null <= 0 are true 
// (because null is converted to 0 for the comparison). 

console.log(undefined==null); // output: true (undefined and null are considered equal in loose equality)
console.log(undefined==0); // output: false (undefined is not equal to 0 in loose equality)
console.log(undefined>0); // output: false (undefined is converted to NaN for the comparison, and any comparison with NaN returns false)
console.log(undefined<0); // output: false (undefined is converted to NaN for the comparison, and any comparison with NaN returns false)
console.log(undefined>=0); // output: false (undefined is converted to NaN for the comparison, and any comparison with NaN returns false)
console.log(undefined<=0); // output: false (undefined is converted to NaN for the comparison, and any comparison with NaN returns false)

//it is important to understand these nuances when working with null and undefined in JavaScript, 
// as they can lead to unexpected results if not handled carefully.

// Hence, it is best practice to avoid using null in comparisons and 
// to use strict equality (===) instead of loose equality (==) to prevent confusion 
// and ensure that your code behaves as intended.







//logical operators
let x=true;
let y=false;

console.log(x && y); // logical AND, output: false
console.log(x || y); // logical OR, output: true
console.log(!x); // logical NOT, output: false
console.log(!y); // logical NOT, output: true   






//increment and decrement operators
let count=0;

count++; // equivalent to count = count + 1
console.log(count); // output: 1

count--; // equivalent to count = count - 1
console.log(count); // output: 0




//prefix vs postfix increment
let number=5;

console.log(number++); // output: 5 (postfix increment, returns the value before incrementing)
console.log(number); // output: 6 (number is now incremented)
console.log(++number); // output: 7 (prefix increment, increments the value before returning it)
console.log(number); // output: 7 (number is now incremented)





//ternary operator
let age=18;
let canVote=age>=18 ? "Yes" : "No"; // if age is greater than or equal to 18, canVote is "Yes", otherwise "No"
console.log(canVote); // output: "Yes"  




//unary operators
let num=5;
console.log(-num); // unary negation, output: -5
console.log(+num); // unary plus, output: 5 (no change to the value)

//Confusing part
console.log(+true); // output: 1 (the unary plus operator converts true to 1)
console.log(-true);// output: -1 (the unary negation operator converts true to 1 and then negates it to -1)
console.log(+false); // output: 0 (the unary plus operator converts false to 0)
console.log(+""); // output: 0 (the unary plus operator converts an empty string to 0)
console.log(+" "); // output: 0 (the unary plus operator converts a string with a space to 0)
console.log(+"abc"); // output: NaN (the unary plus operator cannot convert a non-numeric string to a number, resulting in NaN)
console.log(+"23"); // output: 23 (the unary plus operator converts the numeric string "23" to the number 23)





// string concatenation operator
let firstName="John";
let lastName="Doe";
let fullName=firstName + " " + lastName; // concatenates firstName and lastName with a space in between
console.log(fullName); // output: "John Doe"    



//string repetition operator (ES2021)
let str="Hello ";
let repeatedStr=str.repeat(3); // repeats the string 3 times 
console.log(repeatedStr); // output: "Hello Hello Hello "
let repeatedStr2=str*3; // this will not work as the * operator is not defined for strings, it will result in NaN (Not a Number)
console.log(repeatedStr2); // output: NaN



//Important note
console.log(1+"2"); // output: "12" (number 1 is converted to string and concatenated with string "2")
console.log("1"+2); // output: "12" (number 2 is converted to string and concatenated with string "1")
console.log(1+2); // output: 3 (both operands are numbers, so addition is performed)
console.log("1"+2+3); // output: "123" (number 2 is converted to string and concatenated with string "1", then number 3 is converted to string and concatenated with the result)
console.log(1+2+"3"); // output: "33" (number 1 and number 2 are added together to get 3, then number 3 is converted to string and concatenated with the result)
// Explanation: In JavaScript, 
// when the + operator is used with a string and a number, 
// the number is converted to a string and concatenated. 
// When both operands are numbers, addition is performed. 
// The order of operations matters, as seen in the last two examples 
// where the presence of a string causes subsequent numbers to be treated as strings for concatenation.





//ES2021, also known as ECMAScript 2021, is the 12th edition of the ECMAScript standard, which is the standard for JavaScript. 
// It was released in June 2021 and includes new features and improvements to the language. 
// Some of the notable features introduced in ES2021 include:
// 1. String.prototype.replaceAll(): A new method that allows you to replace all occurrences of a substring in a string.
// 2. Logical Assignment Operators: New operators (&&=, ||=, ??=) that combine logical operations with assignment.
// 3. Numeric Separators: The ability to use underscores (_) as separators in numeric literals for better readability.
// 4. Promise.any(): A new method that returns the first fulfilled promise among a group of promises.
// 5. WeakRefs: A new feature that allows you to create weak references to objects, which can help with memory management.
// 6. FinalizationRegistry: A new API that allows you to register a callback to be called when an object is garbage collected.

// These features and improvements aim to enhance the functionality and usability of JavaScript, making it easier for developers to write efficient and maintainable code.







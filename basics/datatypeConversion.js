let score="36"; // string
let numberScore=Number(score); // converts string to number

console.log(typeof score); // string
console.log(typeof numberScore); // number

let score2="23abc"; // string
let numberScore2=Number(score2); // converts string to number, but since it contains non-numeric characters, it will return NaN (Not a Number)

console.log(typeof score2); // string
console.log(typeof numberScore2); // number (but the value is NaN)
console.log(numberScore2); // NaN

let score3=undefined; // undefined
let numberScore3=Number(score3); // converts undefined to NaN

console.log(typeof score3); // undefined
console.log(typeof numberScore3); // number (but the value is NaN)
console.log(numberScore3); // NaN

let score4=null; // null
let numberScore4=Number(score4); // converts null to 0

console.log(typeof score4); // object (null is considered an object in JavaScript)
console.log(typeof numberScore4); // number
console.log(numberScore4); // 0

let flag=true; // boolean
let numberFlag=Number(flag); // converts true to 1

console.log(typeof flag); // boolean
console.log(typeof numberFlag); // number
console.log(numberFlag); // 1


let flag2=1; // number
let booleanFlag=Boolean(flag2); // converts number to boolean, any non-zero number will be true

console.log(typeof flag2); // number
console.log(typeof booleanFlag); // boolean
console.log(booleanFlag); // true

let flag3=0; // number
let booleanFlag3=Boolean(flag3); // converts number to boolean, 0 will be false

console.log(typeof flag3); // number
console.log(typeof booleanFlag3); // boolean
console.log(booleanFlag3); // false

let str=""; // empty string
let booleanStr=Boolean(str); // converts empty string to false

console.log(typeof str); // string
console.log(typeof booleanStr); // boolean
console.log(booleanStr); // false


let str2=` `; // string with a space
let booleanStr2=Boolean(str2); // converts string with a space to true

console.log(typeof str2); // string
console.log(typeof booleanStr2); // boolean
console.log(booleanStr2); // true



//converting number to string
let num=123; // number
let strNum=String(num); // converts number to string

console.log(typeof num); // number
console.log(typeof strNum); // string
console.log(strNum); // "123" 



let bool=true; // boolean
let strBool=String(bool); // converts boolean to string

console.log(typeof bool); // boolean
console.log(typeof strBool); // string
console.log(strBool); // "true"





let nullValue=null; // null
let strNull=String(nullValue); // converts null to string

console.log(typeof nullValue); // object (null is considered an object in JavaScript)
console.log(typeof strNull); // string
console.log(strNull); // "null"





let undefinedValue=undefined; // undefined
let strUndefined=String(undefinedValue); // converts undefined to string

console.log(typeof undefinedValue); // undefined
console.log(typeof strUndefined); // string
console.log(strUndefined); // "undefined"



let str3=""; // empty string
let numStr3=Number(str3); // converts empty string to 0

console.log(typeof str3); // string
console.log(typeof numStr3); // number
console.log(numStr3); // 0

let str4=" "; // string with a space
let numStr4=Number(str4); // converts string with a space to 0

console.log(typeof str4); // string
console.log(typeof numStr4); // number
console.log(numStr4); // 0
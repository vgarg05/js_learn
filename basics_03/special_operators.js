//Optional chaining operator (?.) 
// and Nullish coalescing operator (??) are two powerful features in JavaScript 
// that help developers handle situations where values may be null or undefined.



//The optional chaining operator (?.) allows you to safely access nested properties of an object without 
// having to check if each level of the object exists. 
//If any part of the chain is null or undefined, it will return undefined instead of throwing an error.



//The nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, 
//otherwise it returns the left-hand operand. 
// It is useful for providing default values when dealing with potentially null or undefined variables.





//Nullish coalescing operator (??) 

// Is is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined,
// otherwise it returns the left-hand operand.

//Uses:
//1. Providing default values (eg. when a variable is null or undefined)
//2. Handling optional chaining (eg. when accessing nested properties that may not exist)
//3. Avoiding unintended falsy values (eg. when a variable is an empty string or 0, which are falsy but not null or undefined)


let name = null;
let defaultName = "Guest";

let finalName = name ?? defaultName;

console.log(finalName); // Output: "Guest"

//In this example, since name is null, the nullish coalescing operator returns defaultName, which is "Guest". 
//If name had a value other than null or undefined, finalName would have been assigned that value instead.



let name2 = "Alice";
let defaultName2 = "Guest";

let finalName2 = name2 ?? defaultName2;

console.log(finalName2); // Output: "Alice"

//In this example, since name2 has a value of "Alice", the nullish coalescing operator returns name2, which is "Alice".


//Example with undefined
let name3;
let defaultName3 = "Guest";

let finalName3 = name3 ?? defaultName3;

console.log(finalName3); // Output: "Guest"

//In this example, since name3 is undefined, the nullish coalescing operator returns defaultName3, which is "Guest".




//Example with falsy values
let name4 = "";
let defaultName4 = "Guest";

let finalName4 = name4 ?? defaultName4;

console.log(finalName4); // Output: ""

//In this example, since name4 is an empty string (which is falsy but not null or undefined), the nullish coalescing operator returns name4, which is an empty string. 
//If we had used the logical OR operator (||) instead, 
// it would have returned defaultName4 ("Guest") because an empty string is considered falsy.




//Example with optional chaining
let user = {
    name: "Alice",
    address: {
        city: "New York"
    }
};

let city = user.address?.city ?? "Unknown";

console.log(city); // Output: "New York"

//In this example, we use optional chaining (?.) to safely access the city property of the address object. 
//If address or city were undefined, the nullish coalescing operator would return "Unknown".






//Optional chaining 
//allows you to safely access nested properties of an object without having to check if each level of the object exists. 
//If any part of the chain is null or undefined, it will return undefined instead of throwing an error.

let user2 = {
    name: "Bob",
    address: {
        city: "New York"
    }
};

let city2 = user2.address?.city;
console.log(city2); // Output: "New York"

//In this example, we use optional chaining to access the city property of the address object. 
//Since city is explicitly set to "New York", the optional chaining operator returns "New York" instead of throwing an error.



let city3 = user2.address.city.class; //This will throw an error because city is a string and does not have a class property.
console.log(city3); // This will not be reached due to the error thrown above.


//But if we use optional chaining, we can avoid the error:
let city4 = user2.address?.city?.class; //This will return undefined instead of throwing an error.
console.log(city4); // Output: undefined
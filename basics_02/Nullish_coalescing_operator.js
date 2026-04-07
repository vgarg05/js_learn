//Nullish coalescing operator (??) 

// Is is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined,
// otherwise it returns the left-hand operand.

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
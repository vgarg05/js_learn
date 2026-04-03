// Stack memory and heap memory are two different types of memory used in programming languages to manage data.



// Stack memory is a region of memory that is used for storing local variables and function call information. 
// It operates in a last-in, first-out (LIFO) manner, meaning that the most recently added item is the first one to be removed. 
// Stack memory is typically faster than heap memory because it is managed automatically by the programming language 
// and does not require manual memory allocation and deallocation.

//Primitive data types (such as numbers, strings, and booleans) 
// are typically stored in stack memory,

let name1 = "John"; // stored in stack memory
let name2=name1; // stored in stack memory, but points to the same value as name1
//only copy the value of name1 to name2, 
// both name1 and name2 point to the same value in stack memory

console.log(name1); // Output: John
console.log(name2); // Output: John

name1 = "Doe"; // name1 now points to a new value in stack memory

console.log(name1); // Output: Doe
console.log(name2); // Output: John (name2 still points to the original value in stack memory)




// Heap memory, on the other hand, is a region of memory that is used for dynamic memory allocation. 
// It allows programmers to allocate and deallocate memory at runtime, which can be useful for managing large data structures 
// or objects that may not have a fixed size. Heap memory is typically slower than stack memory because it requires 
// more overhead for managing memory allocation and deallocation.


//Non-primitive data types (such as objects and arrays) 
// are typically stored in heap memory

let person1 = { name: "John", age: 30 }; // stored in heap memory
let person2 = person1; // stored in heap memory, but points to the same object as person1
// only copy the reference of person1 to person2, 
// both person1 and person2 point to the same object in heap memory

console.log(person1); // Output: { name: "John", age: 30 }
console.log(person2); // Output: { name: "John", age: 30 }

person1.name = "Doe"; // modify the name property of the object that person1 points to

console.log(person1); // Output: { name: "Doe", age: 30 }
console.log(person2); // Output: { name: "Doe", age: 30 } 
// (person2 still points to the same object in heap memory)




// In summary, stack memory is used for local variables and function call information, 
// while heap memory is used for dynamic memory allocation. 
// Both types of memory are important for efficient programming 
// and can be used together to manage data effectively.


// When a variable is assigned a value, the value is stored in the stack memory 
// if it is a primitive data type, 
// or in the heap memory if it is a complex data type (non-primitive).


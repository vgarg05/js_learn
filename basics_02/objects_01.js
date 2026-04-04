//Objects in JavaScript

// An object is a collection of properties, where each property is a key-value pair. 
// The key is a string (or symbol) that identifies the property, 
// key can be a number, but it will be converted to a string when used as a property key.
// and the value can be any data type, including another object or a function.




//Object literal
// is a way to create an object using a simple syntax. 
// It allows you to define properties and values directly within curly braces {}.
const person = {
    name: "John",
    age: 30,
    city: "New York",
    "phone number": "123-456-7890" 
};



//nested objects
// An object can also contain other objects as properties, creating a nested structure.

const company = {
    name: "Tech Inc.",
    employees: {
        employee1: {
            name: "Alice",
            position: "Software Engineer"
        },
        employee2: {
            name: "Bob",
            position: "Product Manager"
        }
    }
};
console.log(company.employees.employee1.name); // Output: Alice
console.log(company.employees.employee2.position); // Output: Product Manager






//Accessing object properties
//1. Dot notation
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York
//console.log(person.phone number); 
// SyntaxError: Unexpected string - because of the space in the property name, we cannot use dot notation to access it.

//2. Bracket notation
console.log(person["name"]); // Output: John
console.log(person["age"]); // Output: 30
console.log(person["city"]); // Output: New York
console.log(person["phone number"]); // Output: 123-456-7890



//Using symbols as property keys for objects
// Symbols are a new primitive type in JavaScript that can be used as unique property keys for objects. 
// They are created using the Symbol() function and can be used to avoid naming conflicts between properties.

const id = Symbol("id");
const user = {
    name: "Alice",
    [id]: 12345
};

console.log(user); // Output: { name: 'Alice', [Symbol(id)]: 12345 }

console.log(user.name); // Output: Alice
console.log(user[id]); // Output: 12345
console.log(user.id); // Output: undefined - because the property key is a symbol, it cannot be accessed using dot notation.






//Changing object properties
// You can change the properties of an object by assigning new values to them.

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

console.log(car.year); // Output: 2020

// Changing the year property
car.year = 2021;
console.log(car.year); // Output: 2021

// Adding a new property
car.color = "red";
console.log(car.color); // Output: red

// Deleting a property
delete car.model;
console.log(car.model); // Output: undefined - because the model property has been deleted.





//Adding a method to an object
// You can add a method to an object by defining a function as a property of the object.
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

calculator.multiply = function(a, b) {
    return a * b;
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2
console.log(calculator.multiply); // Output: [Function (anonymous)] - because the multiply method has been added to the calculator object.
console.log(calculator.multiply(5, 3)); // Output: 15



//Using this keyword in object methods
// The this keyword refers to the current object that the method is being called on. 
// It allows you to access the properties of the object within the method.

const person2 = {
    name: "Bob",
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person2.greet(); // Output: Hello, my name is Bob and I am 25 years old. 
// - because the this keyword refers to the person2 object within the greet method.






//Freezing an object
// You can freeze an object to prevent any changes to its properties. 
// This means that you cannot add, delete, or modify any properties of the object.

const frozenCar = Object.freeze(car);

// Attempting to change a property of the frozen object
frozenCar.year = 2022;
console.log(frozenCar.year); // Output: 2021 - because the year property cannot be changed due to the object being frozen.

// Attempting to add a new property to the frozen object
frozenCar.color = "blue";
console.log(frozenCar.color); // Output: red - because the color property cannot be added due to the object being frozen.

// Attempting to delete a property from the frozen object
delete frozenCar.make;
console.log(frozenCar.make); // Output: Toyota - because the make property cannot be deleted due to the object being frozen.




//Object.assign() method
// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 
// It returns the target object.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(source); // Output: { b: 4, c: 5 } - because the source object remains unchanged after the Object.assign() method is called.
console.log(target); // Output: { a: 1, b: 4, c: 5 } - because the properties from the source object have been copied to the target object.
console.log(returnedTarget); // Output: { a: 1, b: 4, c: 5 } - because the Object.assign() method returns the target object.

target['a'] = 10; // Changing the value of property 'a' in the target object
console.log(target); // Output: { a: 10, b: 4, c: 5 } - because the value of property 'a' has been changed to 10 in the target object.
console.log(returnedTarget); // Output: { a: 10, b: 4, c: 5 } - because the returned target object is the same as the target object, which has been modified to have 'a' equal to 10.
console.log(target === returnedTarget); // Output: true - because the returned target object is refering to same memory as the target object.



//If i have multiple source objects, the properties from the later source objects will overwrite the properties from the earlier source objects if they have the same key.

const source1 = { a: 1, b: 2 };
const source2 = { b: 4, c: 5 };
const source3 = { c: 6, d: 7 };

const target2 = Object.assign({}, source1, source2, source3);

console.log(target2); // Output: { a: 1, b: 4, c: 6, d: 7 } - because the properties from source2 and source3 have overwritten the properties from source1 where there are key conflicts.
console.log(target2 === source1); // Output: false - because target2 is a new object created by Object.assign(), and it is not the same object as source1 in memory.




// Alternatively, you can use the spread operator (...) to achieve the same result as Object.assign() 
// when copying properties from source objects to a target object.
const target3 = { ...source1, ...source2, ...source3 };
console.log(target3); // Output: { a: 1, b: 4, c: 6, d: 7 } - because the spread operator also copies properties from source2 and source3, overwriting properties from source1 where there are key conflicts.
console.log(target2 === target3); // Output: false - because target2 and target3 are different objects in memory, even though they have the same properties and values.
console.log(target3===source1); // Output: false - because target3 is a new object created by the spread operator, and it is not the same object as source1 in memory.







//Methods of Object

let obj = {
    name: "Alice",
    age: 30,
    city: "New York"
};
// Object.keys() - returns an array of a given object's own enumerable property names.
console.log(Object.keys(obj)); // Output: [ 'name', 'age', 'city' ]

// Object.values() - returns an array of a given object's own enumerable property values.
console.log(Object.values(obj)); // Output: [ 'Alice', 30, 'New York' ]

// Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
console.log(Object.entries(obj)); // Output: [ [ 'name', 'Alice' ], [ 'age', 30 ], [ 'city', 'New York' ] ]

// Object.hasOwnProperty() - returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
console.log(obj.hasOwnProperty('name')); // Output: true - because 'name' is an own property of obj.
console.log(obj.hasOwnProperty('email')); // Output: false - because 'email' is not an own property of obj.
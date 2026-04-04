//De-structuring is a powerful feature in JavaScript that allows you to extract values from arrays or properties from objects 
// and assign them to variables in a more concise and readable way. 
// It can be used with both arrays and objects, making it easier to work with complex data structures.

let course={
    title:"JavaScript - The Complete Guide",
    rating:5,
    students:10000,
    price:99.99,
    isPublished:true,
    tags:["programming","javascript","web development"],
    details:{
        description:"Learn JavaScript from scratch",
        duration:"10 hours"
    }
}

//De-structuring
let {title,rating,students,price,isPublished,tags,details}=course; //Object destructuring
//Object destructuring allows us to extract properties from an object and assign them to variables with the same name as the properties or a different name if specified. 
// This makes it easier to work with objects and reduces the amount of code needed to access their properties.
console.log(title);
console.log(rating);
console.log(students);
console.log(price);
console.log(isPublished);
console.log(tags);
console.log(details);

//Destructuring with renaming
let {title:t,rating:r,students:s,price:p,isPublished:ip,tags:tg,details:d}=course; //Object destructuring with renaming
console.log(t);
console.log(r);
console.log(s);
console.log(p);
console.log(ip);
console.log(tg);
console.log(d);
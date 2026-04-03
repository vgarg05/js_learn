//Dates
//The Date object is used to work with dates and times in JavaScript. 
// It provides various methods to create, manipulate, and format dates.

//1 January 1970 00:00:00 UTC is the epoch time, which is the reference point for all date calculations in JavaScript.

let date= new Date();

console.log(typeof date); //object
console.log(date.toString()); //used to convert date to string
console.log(date.toDateString()); //used to convert date to date string
console.log(date.toTimeString()); //used to convert date to time string
console.log(date.toISOString()); //used to convert date to ISO string
console.log(date.toLocaleDateString()); //used to convert date to local date string
console.log(date.toLocaleTimeString()); //used to convert date to local time string
console.log(date.toJSON()); //used to convert date to JSON string

//toLocaleString() method is used to convert date to a string based on the locale and options provided. 
// And it can be used to format the date in a specific way based on the options provided.

date.toLocaleString("default",{
    weekday: "long", //long, short, narrow
    year: "numeric", //numeric, 2-digit
    month: "long", //long, short, narrow, numeric, 2-digit
    day: "numeric", //numeric, 2-digit
    hour: "numeric", //numeric, 2-digit
    minute: "numeric", //numeric, 2-digit
    second: "numeric", //numeric, 2-digit
    timeZone:"Asia/Kolkata"//specify the time zone
}); 
//This will return a string with the date and time formatted according to the specified options and time zone.



//Creating a date with specific values
let date1= new Date(2020, 0, 2); //January 2, 2020
console.log(date1.toDateString());

let date2= new Date(2020, 0, 2, 10, 30, 0); //January 2, 2020 10:30:00
console.log(date2.toString());

let date3= new Date("2020-01-02T10:30:00"); //January 2, 2020 10:30:00
console.log(date3.toString());
//recommended format for date string is ISO 8601 format (YYYY-MM-DDTHH:mm:ss) 
// to avoid issues with different date formats in different browsers



//Current timestamp
let timeStamp= Date.now(); //returns the number of milliseconds since January 1, 1970 00:00:00 UTC
console.log(timeStamp);



//Date methods
let date4= new Date(2020, 0, 2, 10, 30, 12); //January 2, 2020 10:30:12

console.log(date4.getFullYear()); //returns the year (2020)

console.log(date4.getMonth()); //returns the month (0-11) (0 for January)
console.log(date4.getMonth()+1); //returns the month (1-12) (1 for January)

console.log(date4.getDate()); //returns the day of the month (1-31)
console.log(date4.getHours()); //returns the hour (0-23)
console.log(date4.getMinutes()); //returns the minutes (0-59)
console.log(date4.getSeconds()); //returns the seconds (0-59)
console.log(date4.getMilliseconds()); //returns the milliseconds (0-999)

console.log(date4.getTime()); //returns the number of milliseconds since January 1, 1970 00:00:00 UTC

console.log(date4.getDay()); //returns the day of the week (0-6) (0 for Sunday)




//Convert Date to seconds

let seconds= date4.getTime() / 1000; //convert milliseconds to seconds
//this can will give you the number of seconds since January 1, 1970 00:00:00 UTC for the given date

//it can give decimal value if the date has milliseconds, you can use Math.floor() to get the integer value of seconds
let secondsInt= Math.floor(seconds); 
console.log(seconds);
console.log(secondsInt);
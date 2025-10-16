const score = 400;
console.log(score);

const marks = new Number(100);
console.log(marks); //* this will print as an object 
//* like string this object number also has many features that can be used

console.log(marks.toString());
console.log(marks.toString().length);

//* just like fixed setprecision in c++ this also has Fixed feature
console.log(marks.toFixed(2)); //* how much decimal oint we want after the number is to be given 

const num_2 = 23.8966;
console.log(num_2.toPrecision(3)); //* this thing returns the number as a string 
//* and this thing vaires for the number of digits in the number 

//* for example compare num_3  and num_2 after applying precision
const num_3 = 123.898;
console.log(num_3.toPrecision(3));
//* jaise dono mai precision 3 ka tha lekin dekha 2 digit mai kaisa roundoff hua or 3 digit wale mai kaisa


const hunderds = 1000000;
console.log(hunderds.toLocaleString('en-IN'));


//************** MATH LIBRARY OF JAVASCRIPT ***************  */

console.log(Math); //* this is a object 
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.5));
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.max(1, 2, 3, 4, 5));


console.log((Math.random()*10) + 1 ); //* To get values between 1 to 10 by +1 we exclude the 0 case;
console.log(Math.floor((Math.random()*10)) + 1 );

const min = 10;
const max = 20;

//* if we want values between min and max we can use the simple formula of math random 
//! IMP 
//* Math.floor((Math.random() * (max - min + 1) + min)) + min; 🤓🥸

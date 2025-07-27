//* this keyword tells current context..

const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`); //* current context/scope ko refer karta hai this keyword...
        console.log(this); //* this will print the current contenxt help understand things better...
        
        
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


console.log(this); //* but what happens if we run this globally .............rn this gives empty 




// function chai(){
//     let username = "hitesh";
//     // console.log(this);   
//     console.log(this.username);
    
// }

// chai() //* this will give us so many values... means this giving too much values inside the function..

//* but while accessing the variable inside the function with this gives undefined...

// const chai = function(){
//     let username = "hitest";
//     console.log(this.username);
    
// }
// chai()

//* +=================== Arrow Function =========================+


//*Declared without using the keyword function in variable...

// const chai = () => {
//     let username = 'hitesh';
//     console.log(this); //* here this gives empty parenthesis..
    
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3,4));


//* Arrow function also used as implicit return... mtlb same line mai return kar do .....

// const addTwo = (num1, num2) =>  num1 + num2; //* isme return keyword likhne k jarurat nahi padti...

// const addTwo = (num1, num2) => (num1+num2);


//* we can also return object from these functions....

const addTwo = (num1, num2) => ({username: "hitesh"}); //* Like this its done..

const myArr =  [2, 3, 4, 5, 6];

// myArr.forEach(function () )  //* In for each loop for arrays functions can be passed to do operations ....











//* +================= Immediately Invoked Function Expression (IIFE) =====================+

//* function likhte hi execute ho jaaye....

// function chai(){
//     console.log("DB CONNECTED");
// }

//* Now to use IIFE parenthesis is used applied on the function itself and then its executes with ().. example below...

(function chai(){

    //* named IIFE 
    console.log("DB CONNECTED");
})(); //* we have to end the function too and the line above it also with a semicolon or else it wont know where to stop....


//* can be written as arrow function also..

( (name) => {
    //* unnamed IIFE
    console.log(`DB CONNECTED TOO  ${name}`);
})('hitesh') //* to pass parameters,, parameters are added in this parenthesis
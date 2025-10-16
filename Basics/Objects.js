//* Singleton apne tarah ka ek hi object hai 

//* Object Literals used to declare objects...


//* just like map of c++ but better values can be accessed through the keys that we made...
const JsUSer = {
    name: "Hitesh", //* js processes that name key as string too..
    age: 18,
    "Full name": "Hitesh Choudary", //* now this can never be accessed by the syntax object.key
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

//*contructor method to create an object 
//* Object.create();


//* To access the object we can do that by below example...

console.log(JsUSer.email);
//*and another way is..
console.log(JsUSer["email"]);
console.log(JsUSer["Full name"]);

//* we have symbol datatype in js
//* that can be declared as...
const mySym = Symbol("key1"); //* this declaration is important to use it inside the object...

//* now if we want to use symbol as key in object what should we do.... below
//* we have to use [symbol] to take it as a symbol datatype;

const JsUSer2 = {
    name: "Hitesh", //* js processes that name key as string too..
    age: 18,
    [mySym]: "mykey1",
    "Full name": "Hitesh Choudary", //* now this can never be accessed by the syntax object.key
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};
console.log(JsUSer2[mySym]);

//* if we want to change the values we can directly change them..
JsUSer2.email = "hitesh@chatgpt.com";
//* if we want to lock the object so that its values can't be changes in the future.. we can use freeze

Object.freeze(JsUSer2) //* now changes will not happen althrough it won't throw any error...
JsUSer2.email = "hitesh@microsoft.com";
console.log(JsUSer2);


//* We can also add functions inside of the object
//* And in javascript functions (are also / can be) treated as variables....
//* Jsuser is not freezed so changes can be made on it...
JsUSer.greeting = function(){
    console.log("Hello JS user");
}
JsUSer.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`); //* When we want to reference the same object we can use this keyword of javascript...
    
}
console.log(JsUSer);

// console.log(JsUSer.greeting); //* this will throw function [anonymous].. we gotta add parenthesis..
console.log(JsUSer.greeting());
console.log(JsUSer.greetingTwo());

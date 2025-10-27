//* Object literal (mtlb literally ek object bana lena)

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`); //* this keyword se usne current object ka context le lia 
        console.log(this);
        
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

//* this keyword current context ki baat karta hai...


//* Constructor function in javascript..

// const promiseOne = new Promise();
// const date = new Date(); //* New keyword constructor function hai..


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo =  new User("ChaiAurCode", 11, false);
console.log(userOne.constructor); //* User 2 ne user 1 ko overwrite hi kar diya ye aisa hume nahi chahiye...
console.log(userTwo);

//* toh Ab woh taaki overwrite na ho isliye hum hamesha new keyword use karte hai taake woh new instance de hame us function ka isliye hum hamesha new keyword ka use karte hai..


//* New keyword..
//*
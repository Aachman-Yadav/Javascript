function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); //* protoype ki kuch internal properties hoti hai mtlb prototype k reference mai this keyword store hota hai


//* Function function bhi hai aur object bhi hai...

function createUser(username,score){
    this.username = username
    this.score = score;
}

//* Jaise prototype apne andr bahut saare methods/functions hold karta hai use karne k liye ham kissi function k khud koi prototype method bana sakte hai...

createUser.prototype.increment = function(){
    this.score++; //* Jisne bhi call kara uski values increase kar do.. this mtlb jiss (jisne bulaya)
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25); //* Normally declare karne se naye prototype ki properties nahi aati variable ke andr isliye new keyword use karna padta hai...
const tea = new createUser("tea", 250);

chai.printMe();

//* Notes below for better understanding...
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
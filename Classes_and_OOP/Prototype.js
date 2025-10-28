//* Prototype in detail from here....


let myName = "hitesh     ";
let myChannel = "chai     ";
// console.log(myName.trim().length);

let myHeros = ['thor', 'spiderman'];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
    
}
// heroPower.hitesh();
myHeros.hitesh();
myHeros.heyHitesh();
// heroPower.heyHitesh();


//* inheritance...

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,

    __proto__ : TeachingSupport //* Ye proto ek way hai inheritance achieve karne ka javasript mai..
}

//* Proto ka access bahar bhi le sakte hai..

Teacher.__proto__ = User;


//* What “prototyping” means->
//* Prototyping means connecting one object to another so that it can inherit properties and methods through the prototype chain.

//* Modern syntax of the proto..
Object.setPrototypeOf(TeachingSupport, Teacher) //* 1st para the child which will inherit the property and 2nd para the parent whose properties will be inherited

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength();

"hitesh".trueLength();
"iceTea".trueLength();
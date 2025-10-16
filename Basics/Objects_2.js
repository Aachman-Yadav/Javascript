// const tinder = new Object() //* this is also a way for creating objects.. this is a singleton object.
const tinderUser = {} //* this is not a singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;

// console.log(tinder);
// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: { //* yes object inside objects can be declared 
        userfullname: { //* Kitni bhi nesting ho sakti hai
            firstname: "Hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname); //* this itself prints the dictonary that stored the above another dictonary...
console.log(regularUser.fullname.userfullname.firstname);


//* WE can also combine objects like array 

const obj1  = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {
//     obj1 , obj2
// }
// console.log(obj3); //* this is not good nor efficient way and does not stores correctly... instead 
const obj3 = Object.assign({}, obj1, obj2) //* {} is a optional parameter but insures that they are merged correctly.. this basically stores all them in that empty array otherwise it will go in obj1 
console.log(obj3);

//* But the above syntax is also less used instead we use the spread one like in the array 


const temp = {...obj1, ...obj2}
console.log(temp);

//* jab database se values aayegi toh array of object aayega generally 

const user = [
    {
        id: '1',
        email: 'h@gmail.com',

    },
    {

    },

]

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //* this gives all the keys of thay object in the form of ARRAY...
console.log(Object.values(tinderUser)); //* just like keys we can also use this for values..


console.log(Object.entries(tinderUser)); //* Key values ko array mai convert kar deta hai array of array 

//* if sometimes the values doesn't exists inside the object so we can do is below

console.log(tinderUser.hasOwnProperty('isLogged')); //* is used to see if that object has that key value or not returns boolean...





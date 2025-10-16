//* For of loops --> Array specific...
//* Array k andr objects bhi hote hai 
const arr = [1,2,3,4,5]


//* For of loop syntax below 
// for (const element of object) { //* iterator rahega object pe......
    
// }
//* Kissi bhi object pe laga sakte hai isko..(string wagera kissi pe bhi laga sakte hai)
for( const num of arr ){
    console.log(num);
}

const greetings = "Hello world!"
for( const greet of greetings ){
    console.log(`Each cahr is ${greet}`);    
}


//* Javascript also has Maps...

const map = new Map(); //* Like maps of c++ stores the key value pairs...BUT BUT BUT remembers the original order of the keys (unlike c++ which sorts)
//* No duplicate value 
//* Stores in insertion order of elements..

map.set('IN', "India")
map.set('IN', "India")
map.set('USA', "Unites States of America")
map.set('Fr', "France")
console.log(map);

for( const key of map){
    console.log(key);
}
//* If we want to print key and value differently of the map with 'for of' loop we can do as follows:

for( const [key,value] of map){
    console.log(key,':-',value);   
}

// const myObject = {
//     "game1": 'NFS',
//     "game2": "Spiderman"
// }

//* Object through for of loop can't be iterated like we iterated maps... objects are not iterable from for of loops ....


const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}


//* FOR IN loop use hota hai objects k liye, Sytax below..

// for( const key in object ){

// }

for( const key in myObject){
    console.log(key);
    //* TO get the values from the map we can do
    console.log(myObject[key]);
    console.log(`Key ${key} and the shortcut is ${myObject[key]}`);
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for( const key in programming){
    console.log(key); //* This will return the index of the array if we try to iterate an array through for in loop...
    console.log(programming[key]);
}
//* Maps are not iterable through for in loops ......

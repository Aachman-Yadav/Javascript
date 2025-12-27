//* Object ko detail mai change kaise karte hai...

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") //* 2 paras pass karte hai properties ki liye..

console.log(descriptor);

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nahi bani");
        
    }
}

console.log(chai);
//* Is object ki bhi descriptor properties honge
//* Kuch descriptor properties bahut zada hard coded hoti hai...

console.log(Object.getOwnPropertyDescriptor(chai)); //* Ye toh abhi output undefined dega...
console.log(Object.getOwnPropertyDescriptor(chai, "name")); //* Ye toh abhi output undefined dega...

//* Toh aisi hi objects ki andr hum hamari properties bhi define kar sakte hai...
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name")); //* Now the changes will be shown here...

for (let [key, value] of Object.entries(chai)) {
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`);
    }
    
}
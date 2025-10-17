const clock = document.querySelector("#clock");

//* To get the clock in js we can use the inbuilt function of javascript which provides the time...

let date = new Date();
// console.log(date.toLocaleTimeString());

// setInterval(function(){}, 1000) //* Time interval provide kar deta hai....

//* Upar set interval ka syntax kaise use karte hai...

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString()
}, 1000) //* This will make sure the code will run in every 1000ms which is every 1 sec...
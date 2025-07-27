//* Calculated from 1 January 1970 and is calcualted in ms 


let myDate = new Date()
//* date ka object banana padega 

console.log(myDate);
// console.log(myDate.toString()); //* you will be able to see that this output is better....
// console.log(myDate.toDateString()); //* only date will be shown
// console.log(myDate.toTimeString()); //* only time will be shown
// console.log(myDate.toISOString()); 
// console.log(myDate.toLocaleString());
// console.log((myDate.toLocaleDateString()));
// console.log(typeof myDate); //* Obejct type


//* If we want to create a date ourself
let myCreatedDate = new Date(2023, 0 , 23);
console.log((myCreatedDate.toString())); //* Month 0 se start hote hai js mai....

let myCreatedDate2 = new Date(2023, 0 , 23, 5 , 3); //* Now it can be further used to set time also
console.log(myCreatedDate2.toLocaleString());


//* We can take date as a certain input format also ("YYYY-MM-DD");
let date3 = new Date("2023-01-14")
console.log(date3.toLocaleString());

//* We can use different format like ("MM-DD-YYYY") also 
let date4 = new Date("01-23-2023")
console.log(date4.toLocaleString());




//* WE also have timestamps in Javascript 
let myTimeStamp = Date.now();
console.log(myTimeStamp); //* this gives ms value from 1 jan 1970
//* We can also get time in ms from the date example given below 


console.log(date4.getTime()); //* this also gives time in ms as sometimes we need to compare time in ms in room booking and things like that 

//* we can also get this time in seconds 
console.log(Math.floor(Date.now()/1000));


//*There are some methods to this Date like get Month, get year, get day, get hours etc etc......
let newDate = new Date();
console.log(newDate.getMonth()); //* month starts from 0 in it
console.log(newDate.getDay()); //* Monday se start hoga monday as 1...
// console.log(newDate.getMonth());

//* this LocaleString method IS VERY IMPORTANT can be used to change things by declaring objects inside it.....

newDate.toLocaleString('default', { //* default is for the timezones it can be changed to any timezone
    weekday: "long", //* now this will print weekday as full like MONDAY, TUESDAY
})
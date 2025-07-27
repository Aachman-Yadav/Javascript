let score = "33";

console.log(typeof(score));

//* we want that string as a number not as a string so we will do the below method 
let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof(valueInNumber));


let temp = "33abc";
let num_2 = Number(temp);
console.log(typeof(num_2)); //* when we pass char in the Number method we get Nan (not a number but its type is number)
console.log(num_2);


//* converts NUll into 0
let temp_2 = null;
temp_2 = Number(temp_2);
console.log(temp_2);


let temp_3 = undefined;
temp_3 = Number(temp_3)
console.log(temp_3); //* undefined ka bhi NaN ho jata hai

//* TO CONVERT NUMBER INTO BOOLEAN 

let ok = 1;
ok = Boolean(ok);
console.log(ok);

//* EMPTY STRING KA BHI FALSE AATA HAI 

let ok_2 = "";
ok_2 = Boolean(ok_2)
console.log(ok_2);

let ok_3 = 110
ok_3 = String(ok_3)
console.log(ok_3);
console.log(typeof ok_3);

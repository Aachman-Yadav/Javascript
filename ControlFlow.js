//* Code kaise run hoga kissi action se...
//* First if condition..

const isUserLoggedIn = true;
if( isUserLoggedIn ){
    //* code inside the if statement.
}

//* Comparison operators... >, <, <=, >=, ==, !=, ===, !== ( also checks the datatype as well )

if( 2 == "2" ){
    console.log("Executed");
    //* Despite the other 2 begin a string the code came in this if statement... that's why === came..
}

//* If and else statments syntax just like c++..
if( 2 === "2" ){
    console.log("Will not come here....");
    
}
else{
    console.log("Else statement..");
}

//* Scope also works like c++ jo bhi if and else statement k andr declare hoga woh no work bahar BUTTTTT... agr variable var se declare kara ho toh woh gloablly declare hota hai woh bahar bhi chalega..

//* It also has short notation just like c++:

let balance = 1000;
if( balance > 500 ) console.log(`Balance: ${balance}, is greater than 500`); //* semi colon lagana padega.


//* || and && works like c++ 




//*++++++++++++++ SWITCH CASE STATEMENT ++++++++++++++++
//* Syntax for swithc key..
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;
switch(month){ //* Parenthesis mai woh key aayegi jisko andr baar baar check karna hai...
    case 1:
        console.log("January");
        break; //* agr break nahi lagenge toh matching k baad k niche k saare run honge.. EXCEPT Default..
        
    case 2:
        console.log("Feb");
        break;
        
    case 3:
        console.log("March");
        break;
        
    case 4:
        console.log("April");
        break;
        
    case 5:
        console.log("May");
        break;
        
    case 6:
        console.log("June");
        break;
        
    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;
        
    default: //* Ye toh run hoga hi hoga
        console.log("default case match");
        

}


//* +++++++++++++ TRUTHY VALUES AND FALSY VALUES +++++++++++++++

//* truthy jisko mann liya jaata hai joh true hongi
let truthy = true;
if(truthy){
    console.log("True");
    
}

//* Falsy Values ---
//* False, 0, -0, "", BigInt 0n, "", null, undefined, NaN,,, Values Except these are connsidered true.

//* Truthy Values---
//* "0", "false", " ", [], {}, function(){}, 

const emptyObj = {};
const arr = [];
if( arr.length === 0 ){
    console.log("Array is empty..");
    
}
if(Object.keys(emptyObj).length === 0 ){
    console.log("Object is empty");
}
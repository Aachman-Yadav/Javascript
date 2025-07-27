function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
    
}

sayMyName //* without parenthessis is reference ... this will give no output
sayMyName() //* but with parenthesis its execution

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1 , number2){
    // let result = (number1 + number2);
    // return result
    return (number1 + number2);
    
}

// addTwoNumbers() //* agr kuch input na daalo toh NaN dega..
// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

const result = addTwoNumbers(3, 5)
console.log("Result :", result);


function loginUserMessage(username = "sam"){
    if( username === undefined){ //* if(!username) like c++ undefined is seen as false/0...
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}

//* We can also give default value inside the function... like above we changes the username to sam..
//* if nothing was passed the default value will be taken and if someting is passed then the value will be overwritten

console.log(loginUserMessage("Hitesh"));


console.log(loginUserMessage()); //* if no value is passed the output comes undefined


//* Sometimes we dont know the number of how many argumnets are going to come to the function....

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(2));
//* but if..
console.log(calculateCartPrice(200, 400, 600, 2000)); //* if we have multiple values it will return the first one....
//* so we will ... to add these take these to the values.....

//* but if pass something besides of it.... and then we pass ...num1 so now the first 2 values values will to the variables then the rest will go to the ...num1 array that will be formed..


const user = {
    username: "Hitesh",
    price: 199,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}

handleObject(user)

//* we can also directly pass object inside the function....

handleObject({
    username: "Sam",
    price: 399
})

//* We can also pass arrays inside the functions as well...

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


const myNumers = [1,2,3,4,5,6,7,8,9,10]

//* Now using map for operations in javascript...

// const newNums = myNumers.map( (num)=> {return num+10}) //* Automatically return kar deta hai toh return nahi karna padta..


//* Chaining --> Multiple methods ek saath laga sakte hai...
const newNums = myNumers.
                map( (nums) => nums*10)
                .map( (num) => num +1)
                .filter( (num) => num >= 40)
console.log(newNums);



//* ++++++++++++++++++ REDUCE FUNCTIONALITY ++++++++++++++++++++++++++++

const myNums = [1,2,3]

//* Isme ek accumulator hota hai aur ek initial value bhi hota hai 
//* Accumulator ko phele initital value pass karo phir woh aur accumualator ban jata hai
//* then accumulator and current value pe operation as we want then the result become the accumulator and the reducer on the array moves further...

// const myTotal= myNums.reduce(function (acc, currval){
//     console.log(`acc : ${acc} and the currval ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => {
    return acc+currval
},0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);

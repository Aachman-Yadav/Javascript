
//* For each loop in JS 
const coding = ["js", "ruby", "java", "python", "cpp"]

//* for each loop used to iterate through the array in js -- its a inbuilt function of array like arr.size() arr.clear() like that

coding.forEach(  function (val) {
    console.log(val);
    
}) //* call back function hota hai isme 


//* We can also use use arrow functions in it to iterate through arrays...

coding.forEach( (item) =>{
    console.log(item);
})


function printMe(item){
    console.log(item);
}

//* In for each loop we can also pass above function, the example is given below...

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> { //* In for each loop it give the element the index and the array itself as a list for the function..
    console.log(item, index, arr);
})


//* Generally we get multiple objects as elements of the array in that for each loop helps...


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

//* For the array like above to iterate its easier to use for each loop..
myCoding.forEach( (item)=> {
    console.log(item.languageFileName);
    console.log(item.languageName);
})


const values = coding.forEach( (item) => {
    console.log(item);

    //* For each loop does not returns any values thats why when we log the values below it gives result 'undefined'
})

console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

//* Just like for each we also have the filer operation also..
//* Filer also takes call back function in it..
// const newNums = myNums.filter( (num) =>  {
//     return num > 4
// }) //* but the filer returns the values...
// console.log(newNums);

const newNums = [];
myNums.forEach( (nums) => {
    if(nums>4){
        newNums.push(nums);
    }
})
console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => {
    return bk.genre === "History"
})

userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);

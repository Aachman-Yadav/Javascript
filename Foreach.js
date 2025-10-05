
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
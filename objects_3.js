//* Destructuring of an object...

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh Sir",

}

// console.log(course.courceInstructor);

//* there is an another way to print the objects... which is used in many places..

const {courseInstructor} = course //* this makes the courseInstructor be treated as variable itself

//* another way which we can also change the name of the varible that we are going to insert 

const {courseInstructor: instructor} = course;
console.log(courseInstructor);
console.log(instructor);

//* THIS DESTRUCTURING IS USED HEAVILY IN REACT 


//* API's comes in the form of json data so some example of json data is given below 

// {
//     "name": "Hitesh" //* Iske andr key ko bhi string mai store karna padta hai
//     "coursename" : "js in hindi",
//     "price": "free"
// }


//* Some times we also get data from api's in the form of Arrays...
// [
//     {},
//     {},
//     {}
// ]
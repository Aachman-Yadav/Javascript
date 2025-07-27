const myArr = [0, 1, 2, 3, true, "Hitesh"];
console.log(myArr);


//* array k andr change sidhe original k andr change hota hai 
myArr[0] = "abc";
console.log((myArr));


//* another way of declaring arrays is 
const myArr2 = new Array(0, 1, 2, 3, 4, 5);


//* Array Methods
myArr.push(6); //* Push like vector of c++ 
myArr.push(7);

myArr.pop() //* pops the last element of the array 
console.log(myArr);


myArr.unshift(9); //* adds the value at the start of the array O(N) complexity operation
console.log(myArr);
myArr.shift() //* removes the element from the start of the array 

console.log(myArr.includes(1)); //* returns bool
console.log(myArr.includes(21));

console.log(myArr.indexOf(0)); //* not present but asking for its index, so gives -1
console.log(myArr.indexOf(3));

const newArr = myArr.join(); //* coverts the array into string but indexing remains the same

console.log(newArr);
console.log(typeof newArr);


//* SLICE AND SPLICE OPERATION OF ARRAY........

console.log("A", myArr2);

const myn1 = myArr2.slice(1, 3); //* Iska mtlb 1st index se start aur 1st ko include karenge aur 3rd ko nahi 2 tak hi jayega
console.log(myn1);

console.log("B", myArr2);

const myn2 = myArr2.splice(1,3) //* Isme dono include hote hai , AUR ORIGINAL ARRAY MAI SE YE HAT JAATE HAI
console.log("C " + myArr2);
console.log(myn2);



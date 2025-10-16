const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//* if we push one array itself in another one what will happen

// marvel_heros.push(dc_heros);
console.log(marvel_heros); //* so as you can see the element itself is a array they do not get merged
// console.log(marvel_heros[3][1]);

//* to merge both we can also use concat method

const allHeros = marvel_heros.concat(dc_heros); //* this method return a new array that's why new array is made
console.log(allHeros);


//* we can also use spread operator instead of concat to merge 2 arrays
const all_new_heros = [...marvel_heros, ...dc_heros] //* yes its syntax uses ... to spread it out
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; //* this thing can be dealt with by below method 

const real_another_array = another_array.flat(Infinity); //* we have to pass the depth inside this method till which depth it have to flaten the array..
console.log(real_another_array);



//* When we don't know how the data is coming so we do this below 

console.log(Array.isArray("Hitesh")) //* its not an array but we can also convert it to a array 

console.log(Array.from("Hitesh")); //* It made array from the indiviual element of the string ...

console.log(Array.from({name:"Hitesh"})); //* Its unable to convert this into array

let score1 = 100;
let score2 = 200;
let score3 = 300;
//* We can convert these to array as well 

console.log(Array.of(score1, score2, score3)); //*This will also create an array



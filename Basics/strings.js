const name = "Aachman";
const repocount = 50;

console.log(name + repocount + " Value");
//* this syntax is old and not used nowdays 
//* we use backticks now days

console.log(`Name is ${name} and my repocount is ${repocount} this value`);


//*there is another object way to declare string 

const gameName = new String('AachmanY')
console.log(gameName); //* this becomes key value pair 
//* means index is key and the letter is the value for that key

//* feature of this is that this gives you more featrues like length and MANY other features

console.log(gameName[0]);

//* to access the prototype of that object we can use 
console.log(gameName.__proto__); //* here it is not showing anything but in browser log it shows all its features and everything 

console.log((gameName.length));
console.log(gameName.toUpperCase());


//* we can also find which character is present at which postition 
console.log(gameName.charAt(2));

//* if we can to know the index of the character 
console.log(gameName.indexOf('A'));
//* ⬆️ this gives 1st occurence of the char we are looking for if not present it gives -1


const newstring = gameName.substring(0, 4) //* this means from 0 to 3 -- 4 not included 
console.log((newstring));

const anotherString = gameName.slice(-7, 4) //*slice can have -ve values as well which will make it start from the end...
console.log(anotherString);


//* to remove extra white spaces we can use TRIM 
const newStringOne = '   Aachman    ';
console.log(newStringOne)
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20chourdary"
//* suppose we have to remove the %20 from the link above we can use the replace function of the string 

console.log(url.replace('%20', ''));

//* we can also find substring inside the string in js with the use of includes 

console.log(url.includes('hitesh'));
const temp = 'Aachman-Yadav-24'
//* if we have to seperate the string based on the - or something we can do that using SPLIT method

console.log(temp.split('-'));

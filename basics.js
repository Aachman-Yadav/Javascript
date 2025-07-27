const accoutnId = 12345;
let name = "Aachman" //* majorly let and const hi use hota hai new js codes ke andr let scope mai define hota hai
var email = "aachman@gmail.com" //* var jaha bhi decalre karo woh global ho jata hai isliye avoid karte hai var ko use karna 
accountCity = "Indore" //! Variable iss tarah se bhi decalre ho sakta but not used ever...

//* AVOID VAR AND DEFAULT USE ONLY CONST AND LET...

console.table([accoutnId, name, email, accountCity]);

//* connsole.table is used to print all variables together in tabular form very helpful if we want to print many variables together in javascript...



//* hum aajkal datatype ki values ko symbol bhi dete hai isse values hamesha unique rehti hai 


//* value of null is the type of object as below console log tells 

console.log(typeof(null)); //* object 

//* but the type of undefined gives us undefined 
console.log(typeof(undefined));

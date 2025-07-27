//* This will tell how the code will be executed in Javascript and this is quite confusing


//* Javascript Execution context how the code will be executed and call stack....
//* runs in 2 phase 

//* 1. Global execution context.. (stored in 'this' variable )
//* 2. Functional Execution Context...
//* 3. Eval Execution Context.. (In Mongoose , not rn)

//* 2 Phase in which javascript code runs which are...
//* 1. Memory Creation Phase..
//* 2. Execution Phase..

//* When code runs 
//* First -> Global Execution.. -> this 
//* Second -> Memory Phase.. Variables came accordingly (then initialized by undefined) then if function declared that comes and in it the definition of the function is stored then further variables..

//* Third -> Execution phase -> the values of the variables if defined goes into the variables which were given undefined earlier.. functions are alread defined andddd if a function is IMP ""ran then it creats its own seperate exection context"" which makes its own new variable environment + Execution Thread.. Jitni baar bhi function aayega utni baar hoga.

//* That environment created when function was called in it the inside variables of the function are intialized with undefined and that works like the cycle that above stated and the Execution context of the function runs in which the values that came as a parameters get assigned and then the calculations and tasks of the function is done then the return statement returns it to the parent executional context then the execution context seperate of that function is deleted...



//* ++++++++++++++ CALL STACK ++++++++++++++++++

//* Its the stack of order 
//* Which consists...
//* First -> Global Execution at the bottom of the stack
//* Second -> When function is called the function gets above the global exectuion and when the execution of the function is complete its removed from the stack..

//* Other case when other function is called inside the function so the other function which is called inside the function gets above the function which called it in the stack.. (LIFO) then first comes out the second function which was called inside the first function and then the first function's execution is completed...

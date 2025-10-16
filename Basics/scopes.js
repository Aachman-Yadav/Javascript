let a = 10; //* works in scope like data types in c++ declared in scope will be used in that scope only..
const b = 20; //* once declared cannot be declared again...
var c = 30; //* declares globally..



// console.log(a);
// console.log(b);
// console.log(c);


//* NEsted Scope 

function one(){
    const username = 'hitesh';

    function two(){
        const website = 'youtube';
        console.log(username);
    }

    // console.log(website);
    two();
}

one();



//* +==================== Interesting ===========================+ 

let bt = addone(7); //* this thing above the function declaration also works...
function addone(num){
    return num+1;
}


//* BUt when the function is defined in a variable this gives error when the function call is used before declaration...
// addTwo(5);

const addTwo = function(num){ //* variables can also hold function
    return num+2;
}
addTwo(5)
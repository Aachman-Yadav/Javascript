//* Promise is an object representing the evantual completion or failure of a task...
const promiseOne = new Promise(function(resolve, reject){
    //*Do any async task
    //Like
    // DB calls, cryptography, network calls
    setTimeout(()=>{
        console.log("Async Task is complete");
        resolve() //* Ye sidha connect hoga then se..
    },1000)

}) //* Promise ka directly object milne laga hai..

//* Promise callback leta hai...
//* Promise k 2 part hote hai resolve, reject..

promiseOne.then(function(){
    console.log("Promise consumed");
    
}) //* Resolve ka connection hai sidha then k sathh


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();   
    },1000)
}).then(function(){
    console.log("Async-2 resolved");
    
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@example.com"}) //* resolve k andr data pass kar sakte hai jo promise k baad then mai act karta hai..
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Hitesh", password:"123"});
        }
        else{
            //* Reject error 
            reject("ERROR: Something went wrong") //* if we dont want the promise to be resolved or if there is any issue we reject it....
        }
    }, 2000)
})

// promiseFour.catch(function(){

// }) //* Agr reject se aa rha hai promise toh woh catch ke andr jaayega naaki then k andr..

promiseFour.then((user)=>{
    console.log(user);
    // console.log(user.username);
    return user.username //* Jo ye return value hai woh next then pe jaayega JI HAI THEN KI chaining kar sakte hai...
    
}).then((username)=>{ //* Jo upar waale then se value reutrn hogi wahi idhr use mai aayegi...
    console.log(username);
    
}).catch(function(error){
    console.log(error);
}).finally(()=>{ //* Ye bhalaye promise resolve ho ya reject ho hamesha finally mai toh jayega 
    console.log("The promised is either resolved or rejected");  
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"javascript", password:"123"});
        }
        else{
            //* Reject error 
            reject("ERROR: JS went wrong")
        }
    }, 2000)
})

//* Promise ko async await se bhi handle kar sakte hai....
//* ------ Async - Await syntax ---------
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    }catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//         const data = await response.json(); //* Ispe bhi await lagana padega kyuki isko bhi time lagta hai...
//         console.log(data);
        
        
//     } catch (error) {
//         console.log("E :", error);
//     }
// }

// getAllUsers();

//* Sidha try and catch kar sakte hai fetch k upar bina await waala syntax follow kiye..
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json(); //* response.json ko bhi further handle karna padega na toh ek aur then use karenge...
}).then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})
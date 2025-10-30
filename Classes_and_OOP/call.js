function SetUsername(username){
    this.username = username;
    //* Complex DB calls;
    console.log("Called");
    
}

function createUser(username, email,password){
    this.email = email;
    // this.username = username;
    // SetUsername(username) //* Ye call ho hi nahi rha idhr toh change hi nahi ho rha username toh jaake..
    //* So now if we want to call the setuserName method we will use the call keyword for it.. and we have to pass it with reference
    SetUsername.call(this, username) //* now the other method will use the this that we gave...

    //* Ye call(this, username) ye apna execution context jiss method ko call kar rhe hai usko pass kar deta hai that's why by doing this we see changes
    
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);

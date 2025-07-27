//* Stack and Heap memory 

//* Stack (primitive) Heap (non-primitive)
//* ⬆️ copy banti hai, ⬆️copy nahi - by reference 

//* jo apne int wagera hai woh toh stack mai hi store hote hai aur hamesha unki copy hi banti hai 

//* going to heap we are using obe=ject for it 

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;
//* now this user_2 is referenced from user_1;
userTwo.email = "user_2@gmail.com";

console.log(userOne, userTwo);

//* as we can see both of them has changed that is why it was by reference 

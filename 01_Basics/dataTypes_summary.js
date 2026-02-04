const bigNumber = 6485748569828365865374636878468n
console.log(typeof bigNumber);
// output is bigint

const id = Symbol('123')
console.log(typeof id);
// output is symbol

const cartoons = ["motu", "patlu", "ninja"]
console.log(typeof cartoons);
// output is object 

const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof myFunction);
// output is function

let myObj = {
    name : "ujala",
    age : 20,
}
console.log(typeof myObj);
// output is object

const score = 100.8
console.log(typeof score);
// output is number 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive)  &  Heap (Non-Primitive)

// e.g. of stack
let myYoutubename = "ujaladotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename) // ujaladotcom
console.log(anothername) // chaiaurcode

// yaha pe jo bhi variable declare karte hain uska copy milta h : stack  

//e.g. of heap
let userOne = {
    email : "user@gmail.com" ,
    upi : "user@ybl"
}
let userTwo = userOne

userTwo.email = "ujala@gmail.com"
// object ke andar aise hi access karte h dot laga ke 

console.log(userOne.email) // ujala@gmail.com
console.log(userTwo.email) // ujala@gmail.com
/*
jab bhi ek memory/object heap ke andar chala jata h to waha se 
reference milta h original value ka to jo bhi value humlog change karenge 
wo original value me change hoga - Heap
*/
let score = "33abc" //this is in double quote so it shows string instead od numbers

//console.log(typeof(score)); 
//aise bhi like sakte h

let valueInNumber = Number(score)
/*
score jo abhi double quote me h yani ki string h usko number me convert kar rhe h
*/
//console.log(typeof valueInNumber);
//console.log(valueInNumber); 
// iska output NaN hai, it means not a number 

// agar let score = undefined hota aur baki same rehta to iska output bhi NaN hi aata 

let age = null
let valueInAge = Number(age) // age ko number me convert karna h isliye number likha h humne 
//console.log(typeof valueInAge);
//console.log(valueInAge); // iska output zero (0) hoga kyuki age null h

/*
let score = true hota to output 1 aayega
let score = false hota to output 0 aayega
*/

let isLoggedIn = 1 // output = true

/* let isLoggedIn = "" 
 output = false
*/

/* let isLoggedIn = "Ujala" 
output = true
*/

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

let someNumber = 45
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);


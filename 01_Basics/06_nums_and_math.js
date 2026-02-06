const score = 400
console.log(score); //output: 400


const balance = new Number(100)
// console.log(balance); //output: [Number: 100]
// console.log(balance.toString()); //ouput: 100
// console.log(balance.toString().length); //output: 3
// console.log(balance.toFixed(2)); //output: 100.00

//PRECISIONS
const otherNum = 23.4588
//console.log(otherNum.toPrecision(3)); //output: 23.5

const otherNumber = 123.3988
// console.log(otherNumber.toPrecision(3)); //output: 123
// console.log(otherNumber.toPrecision(4)); //output: 123.4

const hundreds = 1000000
//console.log(hundreds.toLocaleString()); 
// ouput: 1,000,000 (British type)

//console.log(hundreds.toLocaleString('en-IN')); 
// ouput: 10,00,000 (humne specify kar diya h Indian type)

// ++++++++++++++++++++ Maths +++++++++++++++++++++++

console.log(Math)

console.log(Math.abs(-5)) //absolute value so output: 5
console.log(Math.abs(5)) //output:5
//absolute me output me hamesha positive value hi hoga

console.log(Math.round(4.2)) //output: 4
console.log(Math.round(4.9)) //output:5
console.log(Math.ceil(4.2)) 
//ceiling means upper value means 4 se thoda bhi bara h to 5 hogi
console.log(Math.floor(4.9))
//floor means lower value means 5 se thoda bhi chota h to 4 hogi

console.log(Math.min(4,6,3,9)) //output:3
console.log(Math.max(4,6,3,9)) //output:9

console.log(Math.random()) //output: 0.7684787
console.log(Math.random()) //output: 0.98363567
//random me 0 se 1 ke bich me value aayegi 

console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
// 10 se multiply karte h to hame values left me milegi aur 1 se add isliye kiya taki math.floor ke wajah se value 0 na aa jaye

const min =10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)
// is formula ka use tab karenge jab specific max and min value di huyi ho
let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
//console.log(myDate.toISOString())
//console.log(myDate.toJSON())

console.log(typeof myDate) //output: object

//let myCreatedDate = new Date(2026, 1, 11) 
// kyuki JS me index 0 se start hota h isliye 0 hai to jan hoga aur 1 hai to feb hoga 
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2026, 1, 11, 5, 3) 
// console.log(myCreatedDate.toLocaleDateString()) //output: 2/11/2026
// console.log(myCreatedDate.toLocaleString()) // output: 2/11/2026, 5:03:00 AM

// let myCreatedDate = new Date("2026-02-11") //YY-MM-DD
// console.log(myCreatedDate)
// console.log(myCreatedDate.toLocaleString()) //output: 2/11/2026, 12:00:00 AM

let myCreatedDate = new Date("02-11-2026")  
// In India, we generally follow this MM-DD-YY
//console.log(myCreatedDate.toLocaleString()) //output: 2/11/2026, 12:00:00 AM

// ++++++++++ TIME-STAMP +++++++++++

let myTimeStamp = Date.now()
// console.log(myTimeStamp) //output: 7783812497983 (miliseconds)
// console.log(myCreatedDate.getTime()) //output: 778382648497983 (miliseconds)

//converted in second (kyuki values hame miliseconds me milti h jab hum time use karte h tab)
//console.log(Math.floor(Date.now()/1000)) //output: 177064654
//floor isliye liya taki cjoti value mile 

let newDate = new Date()
console.log(newDate) //output: 2026-02-07T11:49:53.897Z
console.log(newDate.getMonth()) //output: 1 (kyuki feb chal rha h aur JS me 0 se start hota h isliye)
console.log(newDate.getDay()) //output: 6 (kyuki aaj saturday hai aur monday se start hota h isliye saturday 6 pe aayega)

//normal month dikhe uske liye
console.log(newDate.getMonth() +1) //output: 2

newDate.toLocaleString('default',{
    weekday : "long" ,
    // we can define so many things as well like 
    // timezone : ""
})
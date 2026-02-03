const accountId = 144532
let accountEmail = "jatin@gmail.com"
var accountPassword = "12345"
/* Prefer not ot use var
Because of issue in block scope and functional scope */
accountCity = "Pune"

//accountId = 2 // not allowed because accountId is constant  
accountEmail = "ujala@gmail.com"
accountPassword = "23451" 
accountCity = "Bihar"
let accountState;
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

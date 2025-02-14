const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

 // accountId = 2  not allowed becasue its a constant and already assigned a value in line 1 //


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope instead use let
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
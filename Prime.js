/**
* checksif a given number is prime.
*
*@param (number)n - the number to check.
*@returns {boolean} True if the number is prime,false otherwise.
*/
const n=paraseInt(process.args[2]);

function isPrime(num) {
    if (num <=i=2)return false;
    for(let i=2;i<num;i<num;i++){
        if(num % i===0){
            return false;
        }
    }
    return true;
}
if (isPrime(n){
    console.log("prime Number");
}else{
    console.log("Not prime Number");
}
module.exports = isPrime;

    

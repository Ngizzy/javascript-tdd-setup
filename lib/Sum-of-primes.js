
'use strict'

module.exports = {
  SumOfPrimes: function(P) {
    // returns true if number is a  prime number
    function isprime(num){
      var i = 2;
      if (num ===2){
        return true
      }
      else{
        for (var i =2; i <num; i++){
          if (num % i ===0){
            return false;
          }
        }
        return true;
      }
    }

    //returns a list of prime numbers 
    function prime(n){
      var count = 2;
      var x = []
      while(count <= n){
        if(isprime(count)) {
          x.push(count)
        }
        count += 1;
      }
      return x;

    }

    //check if P is a valid number
    P === parseInt(P)
    if (typeof P !== 'number' && isFinite(P) || typeof P === 'string' || P === null){
      return "Only numbers allowed as parameter"
    }

    // check if parameter is negative
    if (P < 1){
      return "Only values greater than 1 are allowed"
    }

    // check if parameter is negative
    if (P === 1){
      return "undefined"
    }
  // calculate sum of prime numbers
  var sum = prime(P).reduce((a, b) => a + b, 0);
  return sum;
  
  }
}
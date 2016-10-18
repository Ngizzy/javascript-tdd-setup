'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/Sum-of-primes');

describe("Test that constants are computed properly", function() {
  it("should give 17 for constants 10 as P ", function() {
    assert(
      lib.SumOfPrimes(10) === 17
    );
  });


  it("should return 'Only numbers allowed as parameter' for an array parameter ", function() {
    assert(
      lib.SumOfPrimes([]) === "Only numbers allowed as parameter"
    );
  });


  it("should only accept integers as P ", function() {
    assert(
      lib.SumOfPrimes("") === "Only numbers allowed as parameter"
    );
  });


  it("should return 'Only numbers allowed as parameter' if an empty string is passed ", function() {
    assert(
      lib.SumOfPrimes(" ") === "Only numbers allowed as parameter"
    );
  });


  it("should only accept integers as P ", function() {
    assert(
      lib.SumOfPrimes(null) === "Only numbers allowed as parameter"
    );
  });


  it("should return 'Only numbers allowed as parameter' if a string is passed", function() {
    assert(
      lib.SumOfPrimes("hello") === "Only numbers allowed as parameter"
    );
  });


  

 it("test for negative values", function() {
    assert(
      lib.SumOfPrimes(-1) === "Only values greater than 1 are allowed"
    );
  });


 it("should give 2 for constant 2 as P", function() {
    assert(
      lib.SumOfPrimes(2) === 2
    );
  });


 it("should give 328 for constant 50 as P", function() {
    assert(
      lib.SumOfPrimes(50) === 328
    );
  });



 it("should give 1060 for constant 100 as P", function() {
    assert(
      lib.SumOfPrimes(100) === 1060
    );
  });


 it("should return undefined for constant 1 as P", function() {
    assert(
      lib.SumOfPrimes(1) === "undefined"
    );
  });


 it("should return 10 for constant 5 as P", function() {
    assert(
      lib.SumOfPrimes(5) === 10
    );
  });


 it("should return 1161 for constant 101 as P", function() {
    assert(
      lib.SumOfPrimes(101) === 1161
    );
  });





 


 

  
});
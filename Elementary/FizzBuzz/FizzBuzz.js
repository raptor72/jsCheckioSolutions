"use strict";

function fizzBuzz(data) {
    if (data %15 == 0 )
        return 'Fizz Buzz';
    if (data % 3 == 0)
        return 'Fizz';
    if (data % 5 == 0)
        return 'Buzz';
    else
        return String(data);
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(fizzBuzz(15), "Fizz Buzz", "15 is divisible by 3 and 5");
    assert.equal(fizzBuzz(6), "Fizz", "6 is divisible by 3");
    assert.equal(fizzBuzz(5), "Buzz", "5 is divisible by 5");
    assert.equal(fizzBuzz(7), "7", "7 is not divisible by 3 or 5");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

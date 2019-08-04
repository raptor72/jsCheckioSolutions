"use strict";

function digitsMultip(data) {
    let result = 1;
    for (let i of String(data)) {
        i = Number(i);
        if (i != 0) {
            result *= i;
        }
    }
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(digitsMultip(123405))

    assert.equal(digitsMultip(123405), 120, "1st");
    assert.equal(digitsMultip(999), 729, "2nd");
    assert.equal(digitsMultip(1000), 1, "3rd");
    assert.equal(digitsMultip(1111), 1, "4th");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

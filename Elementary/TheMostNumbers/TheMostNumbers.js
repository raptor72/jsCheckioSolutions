"use strict";

function mostNumbers(numbers){
    if (arguments.length == 0) {
        return 0;
    }
    let max = - Infinity;
    let min = Infinity;
    for (let i of arguments) {
        if (i > max) {
            max = i;
        }
        if (i < min) {
            min = i;
        }
    }
    return Math.abs(max -min);
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostNumbers(1, 2, 3), 2, "3-1=2");
    assert.equal(mostNumbers(5, -5), 10, "5-(-5)=10");
    assert.equal(Math.round(mostNumbers(10.2, -2.2, 0, 1.1, 0.5)*1000), 12400, "10.2-(-2.2)=12.4");
    assert.equal(mostNumbers(), 0, "Empty");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

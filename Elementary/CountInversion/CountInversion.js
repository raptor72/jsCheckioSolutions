"use strict";

function countInversion(sequence){
    let inversion = 0;
    while (sequence.length >= 1) {
        let num = sequence.shift();
        for (let i of sequence) {
            if (num > i) {
                ++inversion;
            }
        }
    }
    return inversion
}

var assert = require('assert');

if (!global.is_checking) {
    console.log("Example:");
    console.log(countInversion([1, 2, 5, 3, 4, 7, 6]));

    assert.equal(countInversion([1, 2, 5, 3, 4, 7, 6]), 3, "Example");
    assert.equal(countInversion([0, 1, 2, 3]), 0, "Sorted");
    assert.equal(countInversion([99, -99]), 1, "Two numbers");
    assert.equal(countInversion([5, 3, 2, 1, 0]), 10, "Reversed");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

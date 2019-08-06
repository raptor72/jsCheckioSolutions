"use strict";

function median(data) {
    function compareInt(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }

    let mid1 = data.sort(compareInt).slice(0, data.length/2+1).slice(-1)[0];
    let mid2 = data.sort(compareInt).slice(Math.round(data.length/2-1,1))[0];
    return (mid1 + mid2)/2;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(median([1, 2, 3, 4, 5]), 3, "1st example");
    assert.equal(median([3, 1, 2, 5, 3]), 3, "2nd example");
    assert.equal(median([1, 300, 2, 200, 1]), 2, "3rd example");
    assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

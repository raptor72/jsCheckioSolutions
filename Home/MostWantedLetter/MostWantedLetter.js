"use strict";

function mostWanted(data) {
    data = data.replace(/\W/g, '').replace(/\d/g, '');
    let res = [];
    for (let j of data) {
        res.push(j.toLowerCase());
    }
    res = res.sort();
    let frequency = 0;
    let most = res[0];
    for (let i of res) {
        var newMost = res.filter(function sameElements(currentValue) {
            return currentValue == i;
        });
        if (newMost.length > frequency) {
            frequency = newMost.length;
            most = newMost[0];
        }
    }
    return most;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostWanted("Hello World!"), "l", "1st example");
    assert.equal(mostWanted("How do you do?"), "o", "2nd example");
    assert.equal(mostWanted("One"), "e", "3rd example");
    assert.equal(mostWanted("Oops!"), "o", "4th example");
    assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}


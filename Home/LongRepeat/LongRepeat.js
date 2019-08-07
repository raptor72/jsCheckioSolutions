"use strict";

function longRepeat(line) {
    let last = line[0];
    let res = 0;
    let rep = 0;
    for (let i of line) {
        if (i == last) {
            rep++;
            if (rep > res ) {
                res = rep;
            }
            last = i;
        }
        else {
            rep = 1;
            last = i;
        }
    }
    return res;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(longRepeat('sdsffffse'), 4, "First")
    assert.equal(longRepeat('ddvvrwwwrggg'), 3, "Second")
    console.log('"Run" is good. How is "Check"?');
}

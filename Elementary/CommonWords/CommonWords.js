"use strict";

function commonWords(first, second) {
    let arr1 = first.split(',');
    let arr2 = second.split(',');
    let res = [];
    for (let i of arr1) {
        for (let j of arr2) {
            if (i == j) {
                res.push(j);
            }
        }
    }
    return res.sort().toString();
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(commonWords("hello,world", "hello,earth"), "hello", "Hello");
    assert.equal(commonWords("one,two,three", "four,five,six"), "", "Too different");
    assert.equal(commonWords("one,two,three", "four,five,one,two,six,three"), "one,three,two", "1 2 3");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

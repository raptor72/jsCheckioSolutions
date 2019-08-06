"use strict";

function nonUniqueElements(data) {
    function index(num, arr) {
        let res = [];
        for (let i of arr) {
            if (num == i) {
                res.push(i);
            }
        }
        return res.length;
    }
    let result = [];
    for (let j of data) {
        if (index(j, data)> 1) {
            result.push(j);
        }
    }
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

"use strict";

function weakPoint(matrix){
    let weakrow = Infinity;
    let weakcol = Infinity;
    let x = 0;
    let y = 0;
    function sumCol(index) {
        let sum = 0;
        for (let i of matrix) {
            sum += i[index];
        }
        return sum;
    }

    for (let j in matrix) {
        let row = matrix[j].reduce(function(a, b) {
            return a + b;});
        if (row < weakrow) {
            weakrow = row;
            x = j;
        }
        let col = sumCol(j);
        if (col < weakcol) {
            weakcol = col;
            y = j;
        }
    }
    return [Number(x), Number(y)];
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(weakPoint([[7, 2, 7, 2, 8],
                                [2, 9, 4, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [3, 3], "Example");
    assert.deepEqual(weakPoint([[7, 2, 4, 2, 8],
                                [2, 8, 1, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [1, 2], "Two weak point");

    assert.deepEqual(weakPoint([[1, 1, 1],
                                [1, 1, 1],
                                [1, 1, 1]]
                                ), [0, 0], "Top left");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

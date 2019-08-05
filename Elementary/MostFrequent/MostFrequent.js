"use strict";

function mostFrequent(data) {
    let frequency = 0;
    let most = data[0];
    for (let i of data) {
        let newMost = data.filter(function sameElements(currentValue) {
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
    console.log('Example:')
    console.log(mostFrequent([
        'a', 'b', 'c', 
        'a', 'b',
        'a'
    ]))

    assert.equal(mostFrequent([
        'a', 'b', 'c', 
        'a', 'b',
        'a'
    ]), 'a')
    assert.equal(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

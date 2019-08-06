"use strict";

function betweenMarkers(text, begin, end) {
    if (text.indexOf(begin) == -1 && text.indexOf(end) == -1) {
        return text;
    }
    if (text.indexOf(begin) == -1) {
        return text.slice(0 ,text.indexOf(end));
    }
    if (text.indexOf(end) == -1) {
        return text.slice(text.indexOf(begin) + begin.length);
    }
    return text.slice(text.indexOf(begin) + begin.length, text.indexOf(end));
}


var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

    assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    assert.equal(betweenMarkers("<head><title>My new site</title></head>",
                                "<title>", "</title>"), 'My new site')
    assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
    assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
    assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
    assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

"use strict";
// REQUIRES
let mocha = require('mocha'),
    describe = mocha.describe,
    it = mocha.it,
    beforeEach = mocha.beforeEach,
    before = mocha.before;
let chai = require('chai'),
    should = chai.should(),
    expect = chai.expect;
let R = require('ramda'),
    curry = R.curry,
    pipe = R.pipe,
    compose = R.compose;
//---------------------------
let isNodeList = require('../h/isNodeList');
// let main = require('main');

describe("THREE different ways to get a List/an Array of Spans", function () {
    let dom, parent, children;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        dom = document;
        // THIS WORKS
        parent = dom.getElementById('chptr');
        children = parent.children;
        // THESE TWO ALSO WORK
        // children = dom.querySelectorAll('chptr, span'); // THIS works
        children = dom.querySelectorAll('span'); // this WORKS
    });


});



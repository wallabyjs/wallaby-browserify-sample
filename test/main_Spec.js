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

describe("THREE different ways to ", function () {
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
    it("parent should be a div", function () {
        parent.should.be.an('object');
    });

    it(`children should be a NodeList: a deadCollection`, () => {
        isNodeList(children).should.be.True;
        children.should.be.an('object').with.lengthOf(52);
    });
});



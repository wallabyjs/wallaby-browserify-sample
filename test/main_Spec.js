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

describe(`try Node.childNodes:: `, () => {
    let doc;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        doc = document
    });
    let parent = document.querySelector('div .chptr');
        it(`should.BREAK.`, ()=>{
                (parent).should.be.an('object');
        });

    let children = parent.children;
        it(`should be a live collection`, () => {
        (children.length).should.equal(0);
    });
});



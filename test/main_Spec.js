"use strict";
// REQUIRES
let mocha = require('mocha');
let describe = mocha.describe;
let it = mocha.it;
let beforeEach = mocha.beforeEach;
let before = mocha.before;
let only = mocha.only;
let chai = require('chai');
let should = chai.should();
let expect = chai.expect;
// let be = chai.be;

let R = require('ramda'),
    curry = R.curry,
    pipe = R.pipe,
    compose = R.compose;
//---------------------------
let isNodeList = require('../h/isNodeList');
let _mutate = require('../src/mutateTheFirstLine');

describe(`a Chptr has span Verses`, function () {
    let dom, nl, verses;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        dom = document;
    });
    it("document.querySelectorAll('span') should be a nodeList of spans.", function () {
        nl = document.querySelectorAll('span');//
        isNodeList(nl).should.be.true;
    });
    it("document.querySelector('.chptr').children should be a nodeList and arrayLike.", function () {
        nl = document.querySelector('.chptr').children;
        isNodeList(nl).should.be.true;
        R.isArrayLike(nl).should.be.true;
    });
});

describe("main: mutates each Chapter's Element's Style to reflect it's ReadingClss NAME and it's relative position within that ReadingClss list.", function () {
    let dom, anElem;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        dom = document;
    });
    it("should mutate the DOM.", function () {
        let anElem = dom.querySelector('#theFirst');
        // BEFORE: hard code anElem
        anElem.style.backgroundColor = 'pink';
        anElem.style.opacity = '0.99';
        anElem.style.color = 'red';
        _mutate(dom);
        anElem.style.color.should.equal('green');
        anElem.style.opacity.should.equal('0.4');
        anElem.style.fontSize.should.equal('60%');
        // anElem.style.background.should.equal('rgb(255, 192, 203)');
    });
});


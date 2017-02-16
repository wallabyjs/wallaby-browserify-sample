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
let _mutate = require('../src/mutateTheFirstLine');

describe(`a Chptr has span Verses`, function () {
    let dom, nl, verses;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        dom = document;
    });
    it("document.querySelectorAll('span') should be a nodeList of spans.", function () {
        let nl = document.querySelectorAll('span');
        nl.should.be.a('object');
        nl.should.not.be.an('array');
        isNodeList(nl).should.be.true;
        R.isArrayLike(nl).should.be.true;
    });
    it("document.querySelector('.chptr').children should be a nodeList and arrayLike.", function () {
        let nl = document.querySelector('.chptr').children;
        nl.should.be.a('object');
        nl.should.not.be.an('array');
        isNodeList(nl).should.be.true;
        R.isArrayLike(nl).should.be.true;
    });
});

describe("Verses are a Chapter's spans.", function () {
    let dom, verses, anElem;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        // dom = document;
        verses = document.querySelectorAll('span');
    });
    it(`mutateToColor:: S->El -> El should mutate aVerseStyle.
      mutateToColor(color,verse)->verse') `, function () {
        let aVerseStyle = verses[10].style;
        aVerseStyle.backgroundColor.should.not.equal('red');
        //
        let mutateToColor = curry((color, vs) => vs.backgroundColor = color);
        let mutateToRed = mutateToColor('red')(aVerseStyle);
        aVerseStyle.backgroundColor.should.equal('red');
    });
    it(`backgroundColorIs() should mutate aVerseStyle`, () => {
        let aVerse = verses[6];
        let aVerseStyle = aVerse.style;
        aVerseStyle.backgroundColor.should.not.equal('red');// El.style -> El.style
        //
        let backgroundColorIs = curry((color, v_s) => R.assoc('backgroundColor', color, v_s));// El -> El
        let backgroundColorIsRed = backgroundColorIs('red');

        aVerseStyle = backgroundColorIsRed(aVerseStyle);
        aVerseStyle.backgroundColor.should.equal('red');
    });

});


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

describe(`Chptr Verses [spans] can be accessed by querySelector & querySelectorAll`, function () {
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
describe("Verse.style Objects can be changed with backgroundColorIs().", function () {
    let dom, verses, anElem;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        // dom = document;
        verses = document.querySelectorAll('span');
    });
    it(`should mutate aVerseStyleObj; in this case backgroundColor.
      backgroundColorIs(color,OBJ.verse)-> OBJ.verse').
      NOTE: the arguments are verse.style`, function () {
        let aVerseStyleObj = verses[10].style;
        aVerseStyleObj.backgroundColor.should.not.equal('red');
        //
        let backgroundColorIs = curry((color, vs) => vs.backgroundColor = color);
        let backgroundColorIsRed = backgroundColorIs('red');
        //
        aVerseStyleObj = backgroundColorIsRed(aVerseStyleObj);
    });
    it(`backgroundColorIs() should mutate aVerseStyleObj`, () => {
        let aVerse = verses[6];
        let aVerseStyleObj = aVerse.style;
        aVerseStyleObj.backgroundColor.should.not.equal('red');// El.style -> El.style
        //
        let backgroundColorIs = curry((color, v_s) => R.assoc('backgroundColor', color, v_s));// El -> El
        let backgroundColorIsRed = backgroundColorIs('red');
        //
        aVerseStyleObj = backgroundColorIsRed(aVerseStyleObj);
        aVerseStyleObj.backgroundColor.should.equal('red');
    });
});
describe(`CHANGE backgroundColorIs parameters TO (str, LST.elems) FROM  (str, Obj.elemStyle)`, function () {
    let backgroundColorIs = curry((color) => compose(
        R.assoc('backgroundColor', color), R.prop('style'))
    );// El -> El
    let verses;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        verses = document.querySelectorAll('span');
    });
    it(`backgroundColorIs() should mutate aVerseStyleObj`, () => {
        let aVerse = verses[1];
        let aVerseStyleObj = aVerse.style;
        aVerseStyleObj.backgroundColor.should.not.equal('red');// El.style -> El.style
        //
        let backgroundColorIsRed = backgroundColorIs('red');
        aVerseStyleObj = backgroundColorIsRed(aVerse);
        //
        aVerseStyleObj.backgroundColor.should.equal('red');
    });
});



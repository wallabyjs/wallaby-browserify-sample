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
describe(`Fn::new_backgroundColorIs() returns a new CSD.
    it NOW has a parameter HTML.elem FROM  Obj.elemStyles.
    the new Fn signature is STR.color -> HTML.span -> HTML.span.style`, function () {
    let new_backgroundColorIs = curry((color) => compose(
        R.assoc('backgroundColor', color), R.prop('style'))
    );// STR->EL -> EL.style
    let verses;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        verses = document.querySelectorAll('span');
    });
    it(`new_backgroundColorIs() should return a new aVerseStyleObj i.e a new CSD: CSSStyleDeclaration.`, () => {
        let aVerse = verses[1];// any arbitrary span
        aVerse.style.backgroundColor.should.not.equal('red');// El.style -> El.style
        // create a new CSD
        let new_backgroundColorIsRed = new_backgroundColorIs('red');
        let aVerseStyleObj = aVerse.style;
        aVerseStyleObj = new_backgroundColorIsRed(aVerse);
        // confirm
        aVerseStyleObj.backgroundColor.should.equal('red');
    });
});
describe(`Fn::new_backgroundColorIs() returns a new CSD. NOT a new Verse`, function () {
    let new_backgroundColorIs = curry((color) => compose(
        R.assoc('backgroundColor', color), R.prop('style'))
    );// STR -> EL -> EL.style
    let verses;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        verses = document.querySelectorAll('span');
    });
    it(`a new aVerseStyleObj (span) return a CSD i.e aVerseStyleObj
    `, () => {
        let aVerse = verses[1];// any arbitrary span
        aVerse.style.backgroundColor.should.not.equal('red');// El.style -> El.style
        // create a new CSD
        let new_backgroundColorIsRed = new_backgroundColorIs('red');
        let aVerseStyleObj = aVerse.style;
        aVerseStyleObj = new_backgroundColorIsRed(aVerse);
        // confirm
        aVerseStyleObj.backgroundColor.should.equal('red');
    });
    it(`a new aVerseStyleObj  must be applied to a span`, () => {
        let aVerse = verses[1];// any arbitrary span
        aVerse.style.backgroundColor.should.not.equal('red');// El.style -> El.style
        // create a new CSD
        let new_backgroundColorIsRed = new_backgroundColorIs('red');
        let aVerseStyleObj = aVerse.style;
        aVerseStyleObj = new_backgroundColorIsRed(aVerse);
        // confirm
        aVerseStyleObj.backgroundColor.should.equal('red');

        aVerse.style.backgroundColor.should.not.equal('red');
        aVerse.style.backgroundColor.should.equal('');
    });
    it(`new_backgroundColorIs() should create a newVerse with a new CSD`, () => {
        // repeating the above it
        let aVerse = verses[1];
        let new_backgroundColorIsRed = new_backgroundColorIs('red');
        let aVerseStyleObj = aVerse.style;
        aVerseStyleObj = new_backgroundColorIsRed(aVerse);
        aVerseStyleObj.backgroundColor.should.equal('red');
        // new narrow function
        let _newVerse = curry( (csd, vers) => { return vers.style = csd });
        let _newRedVerse = _newVerse(aVerseStyleObj);
        aVerse = _newRedVerse(aVerse);
        //
        aVerse.style.backgroundColor.should.equal('red');
    });
});
describe(`Fn::new_backgroundColorIs() does not return a new Verse.style`, function () {
    let new_backgroundColorIs = curry((color) => compose(
        R.assoc('backgroundColor', color), R.prop('style'))
    );// STR -> EL -> EL.style
    let verses, aVerse, aVerseStyleObj;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        verses = document.querySelectorAll('span');
        aVerse = verses[1];// any arbitrary span
        aVerseStyleObj = aVerse.style;
    });
    it(`a new aVerseStyleObj (span) return a CSD i.e aVerseStyleObj
    `, () => {
        aVerse.style.backgroundColor.should.not.equal('red');// El.style -> El.style
        // NEW
        let new_backgroundColorIsRed = new_backgroundColorIs('red');
        aVerseStyleObj = new_backgroundColorIsRed(aVerse);
        // confirm
        aVerseStyleObj.backgroundColor.should.equal('red');
    });
    it(`a new aVerseStyleObj has not been applied to aVerse`, () => {
        let new_backgroundColorIsRed = new_backgroundColorIs('red');
        aVerse.style.backgroundColor.should.not.equal('red');
        aVerse.style.backgroundColor.should.equal('');
    });
});
describe(`THIS SETS A style property!!! aVerse.style['backgroundColor'] =  'purple'`, () => {
    let verses, aVerse, aVerseStyleObj;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        verses = document.querySelectorAll('span');
        aVerse = verses[2];// any arbitrary span
        aVerseStyleObj = aVerse.style;
    });
    it(`should set a elem.style[property]`, () => {
        // THIS SETS A STYLE!! NOW
        aVerse.style['backgroundColor'] =  'purple';
        aVerse.style.backgroundColor.should.equal('purple');
    });
});



/**
 * Created by CLIF on 1/19/2017.
 */
"use strict";

let R = require('ramda');
let compose = R.compose;

let mocha = require('mocha'),
    describe = mocha.describe,
    context = mocha.describe,
    it = mocha.it;
//
let chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

//HELPER
let set_aCSD = function () {
};
let transformations = {
    opacity: R.identity('0.56'),
    fontSize: R.identity('76%')
};

//BUILD style_anElem HERE then move to src/
// style_anElem = require('../src/style_anElem');
/**
 *style_anElem
 * mutate an ELEM's style object.
 * first get an elem.style object: style =
 * transform the CSD given some functions
 * set elem.style
 * return the element
 */
let style_anElem;// N -> STR

style_anElem = R.curry(
    (elem) => {
        let thisCsd = elem.style;
        thisCsd.opacity = '0.4';
        return elem
    });

describe(`style_anElem:: ELEM -> ELEM
`, function () {
    let fn, chptSpns, aSpan, anElem, aStyleObj;
    mocha.beforeEach(function () {
        loadFixtures('index.html');
        chptSpns = document.querySelectorAll(".chptr span");
        anElem = R.nth(0)(chptSpns);
        aStyleObj = anElem.style;
        fn = style_anElem;
    });
    context(`style_anElem() as a FUNCTION
    `, function () {
        it(`should be a function..`, function () {
            style_anElem.should.be.a('function');
        });
    });
    context(`style_anElem() INVOKED..
    `, function () {
        it(`should return and be equal to the @parm: elem`, function () {
            style_anElem(anElem).should.equal(anElem)
        });
        it(`should have a new elem.style.opacity property`, function () {
            anElem.style.opacity.should.equal('');
            fn(anElem).style.opacity.should.not.equal('');
            anElem.style.opacity.should.equal('0.4');
        });
    });
});
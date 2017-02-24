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

/**
 *style_anElem: CSD -> ELEM -> ELEM
 * mutate an ELEM's style object.
 * first instantiate a elemStyleObj: a CSD
 * transform the CSD given some functions
 * set elem.style
 * return the element
 */
let style_anElem;// ELEM -> ELEM
style_anElem = R.curry(
    (elem) => { // EL -> EL
        let csd = elem.style;
        csd.opacity = '0.4';
        return elem
    }
);
style_anElem = R.curry( // Elem -> STR -> STR -> Elem
    (elem, key, val) => {
        let csd = elem.style;
        csd[key] = val;
        return elem
    }
);

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
            style_anElem(anElem, 'opacity', '0.4').should.deep.equal(anElem)
        });
        it(`should have a new elem.style.opacity property`, function () {
            anElem.style.opacity.should.equal('');
            style_anElem(anElem, 'opacity', '0.4').style.opacity.should.not.equal('');
            anElem.style.opacity.should.equal('0.4');
        });
    });
});

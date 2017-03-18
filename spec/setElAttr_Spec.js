/**
 * Created by CLIF on 1/19/2017.
 */
"use strict";

let R = require('ramda');
// let compose = R.compose;
let pipe = R.pipe;

let mocha = require('mocha'),
    describe = mocha.describe,
    context = mocha.describe,
    it = mocha.it;
//
let chai = require('chai'),
    // expect = chai.expect,
    should = chai.should();

//CODE UNDER TST
let setStyleAttr = require('../src/setStyleAttr');

describe(`setStyleElem:: STR -> ELEM -> ELEM
`, function () {
    let fn, chptSpns, anElem;
    mocha.beforeEach(function () {
        loadFixtures('index.html');
        chptSpns = document.querySelectorAll(".chptr span");
        anElem = R.nth(0)(chptSpns);
        fn = setStyleAttr;
    });
    context(`JUST THE FUNCTION - setStyleAttr()
    `, function () {
        it(`should be a function w/ artity:2..`, function () {
            fn.should.be.a('function').with.lengthOf(2);
        });
    });
    context(`INVOKED setStyleAttr(str, elem)
    `, function () {
        it(`should return and be equal to the @parm: elem`, function () {
            fn('opacity:0.4', anElem).should.equal(anElem)
        });
        it(`should have a new elem.style.opacity property`, function () {
            anElem.style.opacity.should.equal(''); // BEFORE applying fn
            fn("opacity:0.4", anElem).style.opacity.should.not.equal('');
            anElem.style.opacity.should.equal('0.4');
        });
    });
    context(`INVOKED setStyleAttr( WITH str OF multiple Properties
     e.g."opacity:0.4; color:red; font-size:59%" 
    `, function () {
        it(`should STILL have a new elem.style.opacity property`, function () {
            anElem.style.fontSize.should.equal(''); // BEFORE applying fn
            fn("opacity:0.4; color:red", anElem).style.opacity.should.not.equal('');
            anElem.style.opacity.should.equal('0.4');
        });
        it(`should ALSO have a new elem.style.fontSize attribute`, function () {
            anElem.style.fontSize.should.equal(''); // BEFORE applying fn
            // add font-size:59% to string
            // NOTE: css format is: font-size
            // and js el.style is: fontSize!!
            fn("opacity:0.4; color:red; font-size:59%", anElem).style.opacity.should.not.equal('');
            anElem.style.fontSize.should.equal('59%');
        });
    })
});


/**
 *
 */
"use strict";

let R = require('ramda');
let compose = R.compose;
let curry = R.curry;

let mocha = require('mocha');
let describe = mocha.describe;
let context = mocha.describe;
let it = mocha.it;

let chai = require('chai'),
    should = chai.should,
    expect = chai.expect;

// let Fn01 = require('../src/Fn01');
let Fn01 = curry((el, el_ndx, el_lst) => {
    return 'a string'
});

context(`Fn01 APPLIED_TO aChpt_VerseNL RETURNS aRclssName: `, () => {
    describe(`Fn01 is a function `, () => {
        it(`expect a function of length 3.`, () => {
            expect(Fn01).to.be.a('function').with.lengthOf(3);
        });
    });
    describe(` Fn01 partially invoked is still a function but now of length 1..`, () => {
        it(`expect Fn01({}, 2)`, () => {
            expect(Fn01({}, 2)).to.be.a('function').with.lengthOf(1);
        });
    });
});
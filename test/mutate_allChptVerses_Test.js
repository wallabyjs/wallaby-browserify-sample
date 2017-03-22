/**
 * mutate_allChptSet.js
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    pipe = R.pipe,
    compose = R.compose;

// let mocha = require('mocha'); DO NOT USE this already a mocha config file

let chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

// CODE UNDER TST
// let H = require('../h/H');
let Fn = (el, ndx, set) => {
    return el
};

let CUT = pipe(R.addIndex, R.map);

describe(`mutate_allChptVerses:: this combines aMAP(eachElem_En, aSET) -> aSET

    `, () => {
    describe(`CUT: = _mutate_allVerses 
    `, () => {
        let aSet;
        beforeEach(() => {
            aSet = [1, 2, 3, 4];
        });
        it(`is a function.`, () => {
            expect(CUT)
                .to.be.a('function')
                .with.lengthOf(1);  // why not arity:2? BECAUSE currying RETURNS A function!
        });
        it(`is still a function after invoking it with the Fn.`, () => {
            expect(CUT(Fn))
                .to.be.a('function')
                .with.lengthOf(1);
        });
        it(` RETURNS aSet GIVEN aFn && aSet.`, () => {
            expect(CUT(Fn)(aSet))
                .to.be.a('array')
                .with.lengthOf(aSet.length);
        });
    });
});
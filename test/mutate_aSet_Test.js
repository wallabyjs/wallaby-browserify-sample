/**
 * mutate_allChptSet.js
 */
"use strict";

let R = require('ramda')
    // ,curry = R.curry
    // ,pipe = R.pipe
    // ,compose = R.compose
;

// let mocha = require('mocha'); DO NOT USE this already a mocha config file

let chai = require('chai')
    , expect = chai.expect
    // ,should = chai.should()
;

// CODE UNDER TEST
let mutate_aSet = require('../h/alter/aSet');

let Fn = (el, ndx, set) => {
    return [el, ndx, set.length]
};


describe(`mutate_aSet:: this is the COMBINER/MAPPER OF (eachElemEn && aSET) -> aSET

    `, () => {
    describe(`mutate_aSet: = _mutate_allVerses 
    `, () => {
        let aSet;
        beforeEach(() => {
            aSet = ['a', 'b', 'c', 'd'];
        });
        it(`mutate_aSet is a function.`, () => {
            expect(mutate_aSet)
                .to.be.a('function')
                .with.lengthOf(2);
        });
        it(`mutate_aSet(Fn) is still a function after invoking it with the Fn.`, () => {
            expect(mutate_aSet(Fn))
                .to.be.a('function')
                .with.lengthOf(1);
        });
        it(` mutate_aSet(Fn)(aSet) RETURNS aSet GIVEN aFn && aSet.`, () => {
            expect(mutate_aSet(Fn)(aSet))
                .to.be.a('array')
                .with.lengthOf(aSet.length);
        });
        it(` aSet[0] RETURNS the first array [el, ndx, len] `, () => {
            let set = mutate_aSet(Fn)(aSet);
            expect(set[0])
                .to.be.a('array')
                .with.lengthOf(3)
                .which.deep.equals(['a', 0, 4]);
        });
    });
});
/**
 *  mutate_Set_Test.js
 */
"use strict";

let R = require('ramda');
// let compose = R.compose;
let curry = R.curry;

let chai = require('chai'),
    should = chai.should,
    expect = chai.expect;

/**
 * A style note on naming functions: i.e.  Active Subj Verb DO IDO
 *  Active  Clause: Tom HIT theBall USING aBat      FnName._HIT_USING(IDO.aBat) (DO.theBall)
 *  Passive Clause: theBall wasHIT                  FnName._theBall_wasHIT_ (aBat)
 *                      <USING aBat BY Tom>
 *
 *  Active: thisFn MUTATES allVerses                FnName._MUTATE_allVerses: Fn -> SET-> Fn -> SET
 *                      < USING a function typically named _MUTATE_aVerse>
 *  Passive: allVerses areMUTATED                   FnName._allVerses_areMUTATED -> DO
 *                      <USING _MUTATE_aVerse By thisFn>
 *
 *
 *  Active: thisFn APPLIES _MUTATE_aVerse           FnName._APPLY_MUTATE_aVerse: SET -> SET
 *                      <TO aSet of Verses By thisFn>
 *
 *  Passive:_MUTATE_aVerse isAPPLIED                FnName._MUTATE_aVerse_isAPPLIED: SET -> SET
 *                      <TO allVerses BY thisFn >
 */

// TEST DATA
let Noun = [1, 2, 3];
let anArrayStub = Noun;
anArrayStub = require('../data/testData').arrayStub;// -> []

let _aFnStub_ = curry(a => a * 3);// (a -> s)

// CodeUnderTest
let thisSet_MUTATED_with = require('../src/mutate_allChptVerses').thisSet_MUTATED_with(anArrayStub);      // HAS set WANTS Fn
let _APPLY_mutateThisVerse_TO = require('../src/mutate_allChptVerses')._APPLY_thisFn(_aFnStub_);  // HAS Fn WANTS set

// TESTS
describe(`Two Functions can be used to mutateAllVerses`, () => {
    describe(`#1. thisSet_MUTATED_with(_someFn):: HAS aSet WANTS aFn`, () => {
        it(`invoked it should be a Set with len > 0`, () => {
            // expect( R.flip(R.map)(Noun)(_aFnStub_)).to.be.a('array').with.lengthOf(3);
            expect(thisSet_MUTATED_with(_aFnStub_)).to.be.a('array').with.lengthOf(3);
        });
    });
    describe(`#2. the _APPLY_mutateThisVerse_TO(  ):: HAS aFn WANTS aSet`, () => {
        it(` invoked it should return a Noun.Set`, () => {
            // expect(_APPLY_mutateThisVerse_TO(anArrayStub)).to.be.an('array');
            expect(_APPLY_mutateThisVerse_TO(anArrayStub))
                .to.be.an('array')
                .with.lengthOf(3)
                .and.to.deep.equal([3, 6, 9]);
        });
    });
})
;


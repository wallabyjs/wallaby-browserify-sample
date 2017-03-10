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

// TEST DATA

/**
 * A style note on naming functions: i.e.  Active Subj Verb DO IDO
 *  Active  Clause: Tom HIT theBall USING aBat          FnName._HIT_USING(IDO.aBat) (DO.theBall)
 *  Passive Clause: theBall wasHIT                      FnName._theBall_wasHIT_WITH (aBat)
 *                                  <BY Tom USING aBat>
 *  Active: thisFn MUTATES allVerses                     FnName._MUTATE_allVerses -> DO
 *  Passive: allVerses areMUTATED                        FnName._allVerses_areMUTATED -> DO
 *                             <BY thisFn USING _MUTATE_aVerse>
 */

// CodeUnderTest

let Noun = [1, 2, 3];
let _multByThree = curry(a => a * 3);
let _anArray =  require('../data/testData').arrayStub;
const _MUTATE_allVerses = R.map(_multByThree);// NP.set -> NP.set
describe(`Confirm can use a VP_Fn to return a DO`, () => {
    describe(`_multByThree is a VerbPhrase which can return a Noun `, () => {
        describe(`the VerbPhrase:_multByThree`, () => {
            it(`should be a function of len > 0`, () => {
                expect(_multByThree).to.be.a('function').with.lengthOf(1);
            });
        });
        describe(`the _anArray:  `, () => {
            it(` invoked it should return a Noun.Set`, () => {
                expect(_multByThree(10)).to.be.a('number').equal(30);
            });
        });
        describe(`APPLY _MUTATE_allVerses USING _multByThree TO some NOMINAL.
         i.e. a VerbPhrase: which returns a DObj) `, () => {
            it(` invoked it should return an Noun.Set`, () => {
                expect(_MUTATE_allVerses(_anArray)).to.be.an('array').and.to.deep.equal([3,6,9]);
            });
        });
    });
});


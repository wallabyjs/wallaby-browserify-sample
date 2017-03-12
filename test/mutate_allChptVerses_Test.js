/**
 *  mutate_allChptVerses.js
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

// TESTS with Stubs
describe(`Two Functions can be used to mutateAllVerses`, () => {
    // TEST DATA
    let Noun = [1, 2, 3];
    let aStubSet = require('../data/testData').arrayStub;// -> []

    let aStubFn = curry(a => a * 3);// (a -> s)

    // CodeUnderTest
    let aStubSet_MUTATED_by = require('../src/mutate_allChptVerses')
        .thisSet_MUTATED_by(aStubSet);      // now HAS set WANTS Fn
    let _APPLY_aStubFn_TO = require('../src/mutate_allChptVerses')
        ._APPLY_thisFn_to(aStubFn);  // now HAS Fn WANTS set

    describe(`#1. aStubSet_MUTATED_by(_someFn):: HAS aSet WANTS aFn`, () => {
        it(`invoked it should be a Set with len > 0`, () => {
            // expect( R.flip(R.map)(Noun)(aStubFn)).to.be.a('array').with.lengthOf(3);
            expect(aStubSet_MUTATED_by(aStubFn))
                .to.be.a('array')
                .with.lengthOf(3)
                .and.to.deep.equal([3, 6, 9]);
        });
    });
    describe(`#2. the _APPLY_aStubFn_TO(  ):: HAS aFn WANTS aSet`, () => {
        it(` invoked it should return a Noun.Set`, () => {
            // expect(_APPLY_aStubFn_TO(aStubSet)).to.be.an('array');
            expect(_APPLY_aStubFn_TO(aStubSet))
                .to.be.an('array')
                .with.lengthOf(3)
                .and.to.deep.equal([3, 6, 9]);
        });
    });
    describe(`Now partial an HTML Document as theSet in #1. : `, () => {
        it(`should.BREAK.`, () => {
            expect(0).to.equal(0);
        });
    });

});

describe(`Now, use a Fn03:: (STR.selector -> SET.document) -> SET.CHptVerses
    let aStubSet = require('../data/testData').arrayStub;// -> []
    AND use it to produce #3 allChptrVerses_MUTATED_by(_someFn )`, () => {
    let aStubSet = require('../data/testData').arrayStub;// -> []
    let aStubFn = curry(a => a * 3);// (a -> s)

    // CodeUnderTest
    let allChptVerses_MUTATED_by = require('../src/mutate_allChptVerses')
        .thisSet_MUTATED_by(aStubSet);      // now HAS set WANTS Fn

    let Fn03 = (str, doc) => doc.querySelectorAll(str);

    describe(`FIRST,Fn03::(STR.selector -> SET.document) -> SET.ChptVerses`, () => {
        xit(`expect GIVE aSTR.selector, GET aSet.ChptVerses`, () => {
            expect(_APPLY_aStubFn_TO(aStubSet)).to.be.an('array');
            // expect(_APPLY_aStubFn_TO(aStubSet))
            //     .to.be.an('array')
            //     .with.lengthOf(3)
            //     .and.to.deep.equal([3, 6, 9]);
        });
    });
    xdescribe(`#3. allChptrVerses_MUTATED_by(_someFn ):: HAS aSet WANTS aFn`, () => {
        it(`should return aSet given aFn`, () => {
            // expect( R.flip(R.map)(Noun)(aStubSet)).to.be.a('array').with.lengthOf(3);
            expect(aStubSet_MUTATED_by(aStubSet))
                .to.be.a('array')
                .with.lengthOf(3)
                .and.to.deep.equal([3, 6, 9]);
        });
    });
});


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
 *  Active  Clause: Tom HIT theBall USING aBat      FnName might be -> _HIT_WITH(aBat)(something)
 *  Passive Clause: theBall wasHIT WITH aBat        FnName might be -> something_isHIT_WITH(aBat)(something)
 */

describe(`Confirm can use a VP_Fn to return a DO`, () => {
    let Noun = [1, 2, 3];
    let _multByThree = curry(a => a * 3);
    let _NounPhrase = R.identity
    describe(`_multByThree is a VerbPhrase which can return a Noun `, () => {
        describe(`_multByThree`, () => {
            it(`should be a function of len > 0`, () => {
                expect(_multByThree).to.be.a('function').with.lengthOf(1);
            });
        });
        describe(`APPLY _multByThree TO some Noun Object i.e.its .
            ) `, () => {
            it(` invoked it should return an Noun.Set`, () => {
                expect(_multByThree(10)).to.be.a('number').equal(30);
            });
        });
        describe(`Invoke _VerbPhrase1 (with another VerbPhrase2: which returns a NounPhrase / DObj) `, () => {
            it(` invoked it should return an Noun.Set`, () => {
                expect(R.map(_multByThree, _NounPhrase(Noun))).to.be.an('array').and.to.deep.equal([3,6,9]);
            });
        });
    });
});

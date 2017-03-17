/**
 * simpleMutate.js
 */
"use strict";

let R = require('ramda');
// let compose = R.compose;
let curry = R.curry;

let mocha = require('mocha'),
    describe = mocha.describe,
    it = mocha.it;


let chai = require('chai'),
    should = chai.should(),
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

// CodeUnderTest --- these will be moved to src/....js after building these tests.

describe(`map(mutate_aVerse)(HTML document/chapter)
    I want to mutate all of the Verses in a Chapter;
    This is accomplished by map('mutate_aVerse)(document)`, () => {
    let doc, _aChpt, _mutate_aVerse;
    mocha.beforeEach(function () {
        loadFixtures('index.html');
        doc = document;
    });
    xdescribe(`first confirm the Document`, () => {
        it(`should not be 'null'`, () => {
            expect(document).to.exist.and.not.to.be.a('null');
        });
    });
    describe(`then confirm the document has an element 'chptr'`, () => {
        _aChpt = document.querySelector('#chptr');//NOTE use of actual div class=chptr
        it(`should.be an HTML element.`, () => {
            (_aChpt).should.exist;
        });
        it(`should have an element: 'div.chptr`);
        expect(_aChpt).tagName
            .to.be.equal('chptr');
    });
    xdescribe(`next confirm the Fn:_mutate_aVerse`, () => {
        it(`should not be 'null'`, () => {
            expect(document).to.exist.and.not.to.be.a('null');
            it(`should have an element: 'div.chptr`);
            let Chpt = document.querySelector('.chptr');
            expect(Chpt.className)
                .to.be.equal('chptr');
        });
    });
});


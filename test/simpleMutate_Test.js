/**
 * simpleMutate.js
 */
"use strict";

let R = require('ramda'),
    pipe = R.pipe,
    compose = R.compose,
    map = R.map,
    curry = R.curry;

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
let _querySelector = R.invoker(1, 'querySelector');
let _aChpt = _querySelector('body  div .chptr');//DOC->SPAN.  NOTE use of actual div class=chptr with a training 'r'
let _children = curry(elem => elem.children);
let _allVerses = pipe(_aChpt, _children);// ELEM -> [SPANS]

let _mutate_aVerse = () => {
};

describe(`map(mutate_aVerse)(aSet of HTML document/chapter/Verses)

    I want to mutate all of the Verses in a Chapter;
    This is accomplished by map('mutate_aVerse)(document)`, () => {
    let doc, _mutate_aVerse;
    mocha.beforeEach(function () {
        loadFixtures('index.html');
        doc = document;
    });
    describe(`first confirm the Document
    `, () => {
        it(`should not be 'null'`, () => {
            expect(doc).to.exist.and.not.to.be.a('null');
        });
    });
    describe(`confirm Fn:_aChpt(doc) HAS an element 'chptr'
    `, () => {
        it(`should.be an div.chptr element.`, () => {
            expect(_aChpt(doc)).to.exist.and.not.to.be.a('null');
        });
        it(`should have an element: 'chptr`, () => {
            expect(_aChpt(doc).className)
                .to.be.equal('chptr');
        });
    });
    describe(`_aChpt(doc)should HAVE children'
        `, () => {
        it(`should have at least one child`, () => {
            expect(_aChpt(doc).childElementCount)
                .to.be.gt(1);
        });
        it(`should have a SPAN first Child`, () => {
            expect(_aChpt(doc).children[0].tagName)
                .eql('SPAN');
        });

    });
    describe(`confirm the Fn: _children(_aChpt(doc)) RETURNS all the Verses [Spans] 
    `, () => {
        it(`should arrayLike`, () => {
            expect(R.isArrayLike(_children(_aChpt(doc)))).isT;
        });
        it(`should have at least 0ne child`, () => {
            expect(_children(_aChpt(doc)).length).to.be.gt(0);
        });
        it(`should have a Span first Child`, () => {
            expect(_children(_aChpt(doc))[0].tagName)
                .eql('SPAN');
        });
    });
    describe(`now  confirm the Fn:_allVerse(doc) RETURNS all the Verses [Spans].
    
        This is the final setOf_Verses to map the Fn: _mutate_aVerse on to.`, () => {
        it(`should be arrayLike`, () => {
            expect(R.isArrayLike(_allVerses(doc))).ok;
        });
        it(`should have at least 0ne child`, () => {
            expect(_allVerses(doc).length).to.be.gt(0);
        });
        it(`should have a Span first Child`, () => {
            expect((_allVerses(doc))[0].tagName)
                .equal('SPAN');//   NOTE: double quotes:(_allVerses(doc))
        });
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


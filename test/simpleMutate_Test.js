/**
 * @0700 20 march 2017*  BUT it is hardcoded and inflexible and too narrow.
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

let H = require('../h/H');

/**
 // * USAGE: _allChptVersesFrom(document) -> allChptVerses
 */
let _allChptVersesFrom = H.Spans_FROM_theDocument_GIVEN_aSelector('body  div .chptr span');//

describe(`in English this is a Fn that RETURNS aSet_ofVerses FROM theDocument GIVEN aQuerySTR.

 BUT it is inflexible and too narrow: 20 march 2017.
    `, () => {
    let doc;
    mocha.beforeEach(function () {
        loadFixtures('index.html');
        doc = document;
    });

    describe(`FIRST - the Data Fn: _allChptVerses 
     this is a verbose series of tests: from begin to final Fn..`, () => {
        describe(`first confirm the Document
    `, () => {
            it(`should not be 'null'`, () => {
                expect(doc).to.exist.and.not.to.be.a('null');
            });
        });
        //     describe(`confirm Fn:_aChpt(doc) HAS an element 'chptr'
        // `, () => {
        //         it(`should.be an div.chptr element.`, () => {
        //             expect(_aChpt(doc)).to.exist.and.not.to.be.a('null');
        //         });
        //         it(`should have an element: 'chptr`, () => {
        //             expect(_aChpt(doc).className)
        //                 .to.be.equal('chptr');
        //         });
        //     });
        //     describe(`_aChpt(doc)should HAVE children'
        //     `, () => {
        //         it(`should have at least one child`, () => {
        //             expect(_aChpt(doc).childElementCount)
        //                 .to.be.gt(1);
        //         });
        //         it(`should have a SPAN first Child`, () => {
        //             expect(_aChpt(doc).children[0].tagName)
        //                 .eql('SPAN');
        //         });
        //
        //     });
        //     describe(`confirm the Fn: _children(_aChpt(doc)) RETURNS all the Verses [Spans]
        // `, () => {
        //         it(`should arrayLike`, () => {
        //             expect(R.isArrayLike(_children(_aChpt(doc)))).isT;
        //         });
        //         it(`should have at least 0ne child`, () => {
        //             expect(_children(_aChpt(doc)).length).to.be.gt(0);
        //         });
        //         it(`should have a Span first Child`, () => {
        //             expect(_children(_aChpt(doc))[0].tagName)
        //                 .eql('SPAN');
        //         });
        // });
        describe(`now  confirm the Fn:_allVerse(doc) RETURNS all the Verses [Spans].
    
            In context we now have setOf_Verses which a Fn: _mutate_aVersecan use TO MUTATE all of them.`, () => {
            it(`should be arrayLike`, () => {
                expect(R.isArrayLike(_allChptVersesFrom(doc))).ok;
            });
            it(`should have at least 0ne child`, () => {
                expect(_allChptVersesFrom(doc).length).to.be.gt(0);
            });
            it(`should have a Span first Child`, () => {
                expect(_allChptVersesFrom(doc)[0].tagName)
                    .equal('SPAN');
            });
        });
    });
});


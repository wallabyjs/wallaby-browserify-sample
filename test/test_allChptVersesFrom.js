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
 // * USAGE: ret_allChptVerses(document) -> allChptVerses
 */
let ret_allChptVerses = H.Spans_FROM_theDocument_GIVEN_aSelector('body  div .chptr span');//

describe(`in English allChptVersesFrom is a Fn that RETURNS aSet_ofVerses FROM theDocument GIVEN aQuerySTR.

    `, () => {
    let doc;
    mocha.beforeEach(function () {
        loadFixtures('index.html');
        doc = document;
    });

    describe(`FIRST - the Data Fn: _allChptVerses 
    `, () => {
        describe(`first confirm the Document
    `, () => {
            it(`should not be 'null'`, () => {
                expect(doc).to.exist.and.not.to.be.a('null');
            });
        });
        describe(`now  confirm the Fn:ret_allChptVerses(doc) RETURNS all the Verses [Spans].
    
            In context we now have setOf_Verses which a Fn: _mutate_aVerse can use TO MUTATE all of them.`, () => {
            it(`should be arrayLike`, () => {
                expect(R.isArrayLike(ret_allChptVerses(doc))).ok;
            });
            it(`should have at least 0ne child`, () => {
                expect(ret_allChptVerses(doc).length).to.be.gt(0);
            });
            it(`should have a Span first Child`, () => {
                expect(ret_allChptVerses(doc)[0].tagName)
                    .equal('SPAN');
            });
        });
    });
});
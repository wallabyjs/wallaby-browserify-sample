/**
 * Created by CLIF on 4/4/2017.
 */
"use strict";

let R = require('ramda')
    , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
//     , curry = R.curry
;

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

// CODE UNDER TEST
const RANGIFY_this = require('../src/RANGIFY_this'); // LST.[a] -> LST>[N]

describe(`the Fn:  RANGIFY_this() returns a Lst of NUM.indexes.
    
    USAGE: it will REDUCE the ChptVerseS nodeList to just its Indexes
    for use in ReadClss Weighting
    `, function () {
    beforeEach(function () {
        this.stubCV = ['verse1', 'verse2', 'verse3', 'verse4'];
    });
    it(`should be an array of the same length as its argument.`, function () {
        expect(RANGIFY_this(this.stubCV)).to.be.an('array').with.lengthOf(4);
    });
    it(`should have only NUM values beginning with 0.`, function () {
        let ret = RANGIFY_this(this.stubCV);
        expect(R.reduce(R.add, 0)(ret)).equals(6);
    });
});
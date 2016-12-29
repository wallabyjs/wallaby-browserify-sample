/**
 *  STABLE Test BUT now NEED (1)  point-free style for the two mutateSpan class functions AND (2) just the 3 map returns( elt, eltNdx, eltNL)
 */

"use strict";
// REQUIRES

var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;
var beforeEach = mocha.beforeEach;
var before = mocha.before;
var only = mocha.only;
// let skip = mocha.skip; // NOTE:this does not work as it.skip(...-> undefined is not a constructor (evaluating 'it.skip').
// let skipped = mocha.skipped; // NOTE:this does not work as it.skipped(....
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
// let be = chai.be;

var _ = require('ramda');
var compose = _.compose;
var curry = _.curry;
//---------------------------
var isNodeList = require('../h/isNodeList');

// TEST CODE --------------------------------
var mutate_aSpan = function mutate_aSpan(spn, spn_ndx, spn_lst) {
    return spn_lst;
};
var mutateSpans = _.map(mutate_aSpan);
//TESTS
describe(" main", function () {
    var chptSpns = undefined,
        MUTATED_SPANS = undefined;
    beforeEach(function () {
        loadFixtures('index.html');
        chptSpns = document.querySelectorAll(".chptr span");
        MUTATED_SPANS = mutateSpans(chptSpns);
        // stub_curDiv = document.querySelector('.cur');
        // anySpan = _.nth(0)(chptSpns);
    });
    describe(" map eachSpan ", function () {
        it("mutateSpan:: LST -> LST", function () {
            //TESTS
            MUTATED_SPANS.should.exist;
            MUTATED_SPANS.length.should.be.greaterThan(0);
        });
    });
});
//# sourceMappingURL=mainSpec.js.map
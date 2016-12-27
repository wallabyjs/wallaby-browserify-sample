/**
 *  STABLE Test BUT now NEED (1)  point-free style for the two mutateSpan class functions AND (2) just the 3 map returns( elt, eltNdx, eltNL)
 */

"use strict";
// REQUIRES
let mocha = require('mocha');
let describe = mocha.describe;
let it = mocha.it;
let beforeEach = mocha.beforeEach;
let before = mocha.before;
let only = mocha.only;
// let skip = mocha.skip; // NOTE:this does not work as it.skip(...-> undefined is not a constructor (evaluating 'it.skip').
// let skipped = mocha.skipped; // NOTE:this does not work as it.skipped(....
let chai = require('chai');
let should = chai.should();
let expect = chai.expect;
// let be = chai.be;

let _ = require('ramda');
let compose = _.compose;
let curry = _.curry;
//---------------------------
let isNodeList = require('../h/isNodeList');


// TEST CODE --------------------------------
let mutate_aSpan = (spn, spn_ndx, spn_lst) => spn_lst;
let mutateSpans = _.map(mutate_aSpan);
//TESTS
describe(" main",
    function () {
        let chptSpns, MUTATED_SPANS;
        beforeEach(() => {
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
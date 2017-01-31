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
/**
 *      mutateSpan_Csd::( S:prop_name -> a:prop_valu -> Elt: HTML_elt)  -> Elt
 */
const mutateSpan_Csd = require('../src/Elem_Style_Mutator').mutateSpan_Csd;
/**
 *      mutateSpan_rcParent:: mutateSpan_rcParent:: Elt:div -> Elt:span -> Elt:mutated div
 */
const mutateSpan_rcParent = require('../src/Elem_Style_Mutator').mutateSpan_rcParent;
//TESTS
describe("composes 2 functions that mutate a span's CSD:Styles and its Parent's div.RClss/",
    function () {
        let chptSpns, anySpan, stub_curDiv;
        beforeEach(() => {
            loadFixtures('index.html');
            chptSpns = document.querySelectorAll(".chptr span");
            stub_curDiv = document.querySelector('.cur');
            anySpan = _.nth(0)(chptSpns);
        });
        describe(" MUTATE a span.style AND ITS parent readDiv /", function () {
            it("should compose (mutateSpan_rcParent() && mutateSpan_Csd) -> Spn -> mutatedSpn", function () {
                //TEST DATA
                let stub_curDiv = document.querySelector('.cur');
                // CODE UNDER TEST: LAN TO add fn:for current stubValues to make it point_free
                let mutate_aSpan = compose(
                    mutateSpan_rcParent(stub_curDiv),// SPN -> SPN
                    mutateSpan_Csd('fontSize', '125%'),
                    mutateSpan_Csd('opacity', '0.5' )
                );
                // MUTATE CSD && MUTATE divRClss
                let MUTATED_SPAN = mutate_aSpan(anySpan);// SPN -> DIV -> SPN

                //TESTS
                MUTATED_SPAN.should.exist;
                MUTATED_SPAN.tagName.should.equal('SPAN');
                MUTATED_SPAN.should.deep.equal(anySpan);
                MUTATED_SPAN.style.fontSize.should.not.equal('');
                MUTATED_SPAN.style.fontSize.should.equal('125%');
                MUTATED_SPAN.style.opacity.should.equal('0.5');
                MUTATED_SPAN.parentElement.tagName.should.equal('DIV');
                MUTATED_SPAN.parentElement.className.should.equal('cur');
                MUTATED_SPAN.parentElement.childElementCount.should.equal(1);
            });
        });
    });
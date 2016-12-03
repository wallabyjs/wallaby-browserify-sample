/**
 * WIP ADDING a composite function - mutateElt(elt, ndx, nl) - to set its style obj [CSD] &&  its readingClss div.
 * describe(" mutate a span parent: readCls/"
 * describe(" mutate a span CSD a span styleProp/"
 * STABLE
 */

"use strict";

let mocha = require('mocha');
let describe = mocha.describe;
let it = mocha.it;// NOTE: needed but lint still says ->  'Element is not exported'. ???
let beforeEach = mocha.beforeEach;
let before = mocha.before;
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
let _slctElt_byNdx = curry(function (elt_ndx) {// (N:lst_ndx) -> L:elts -> Elt: an elt
    return _.nth(elt_ndx)
});
let _setStylPropLens = _.lensProp;// S -> Lens
let _aStylDct = _.prop('style'); // D -> D.style
// functions TO BE USED in compose
let _setStylPropValue = val => {
    // TODO this will evolve to N.ndx -> a.wt
    return val
};
let _viewStylProp = curry(function (prop_name, elt_dct) {
    return _.view(_setStylPropLens(prop_name), _aStylDct(elt_dct))
});
const _setEltCsd = curry(function _setEltCsd(prop_name, prop_val, elt_dct) {// (S -> S) -> Elt -> Elt.CSD
    return _.set(_setStylPropLens(prop_name), _setStylPropValue(prop_val), _aStylDct);
});

/**
 *  mutating an Element's CSD:Styles and Parents:RClss
 *  USE:reset a specific HTML Style Object [CSD]  property and returns the mutated Element
 */
// TESTS ----------------------------
// requires
/**
 *      mutateElt_CSD::( S:prop_name -> a:prop_valu -> Elt: HTML_elt)  -> Elt
 */
const mutateElt_CSD = require('../src/mutateElt').mutateElt_CSD;
/**
 *      mutateElt_parent:: HTML:chld -> LST:a -> LST:a + chld
 */
const mutateElt_parent = require('../src/mutateElt').mutateElt_parent;
let append_aChld = require('../src/mutateElt').CUT;
// const mutateElt = require('../src/mutateElt').mutateElt;

describe("functions TO mutate an Element's CSD:Styles and its Parents:RClss/",
    function () {
        let chptSpns, anySpan, anyDiv, fontSizeProp;
        beforeEach(() => {
            loadFixtures('index.html');
            chptSpns = document.querySelectorAll(".chptr span");
            anySpan = _.nth(0)(chptSpns);
            fontSizeProp = 'fontSize';
        });
        describe(" mutate a span's CSD/", function () {
            // TODO maybe use mapObj to set styles
            describe("update an Elt.CSD object i.e.P elt.style}/", function () {
                it("should update the CSD object fontSize  USING _setEltCsd", function () {
                    let newVal = '40%'; // PLAN: this will be val=f(elt ndx relative to its siblings AND which readCls it is)
                    let newCsd = mutateElt_CSD(fontSizeProp, newVal);
                    let newSpan = newCsd(anySpan);
                    newSpan.style.fontSize.should.not.equal('');
                    newSpan.style.fontSize.should.equal(newVal);
                });
            });
        });
        describe(" mutate a span's parent:: div.ReadClss/", function () {
            describe("use js appendChild() to move a span to div.cur.", function () {
                beforeEach(() => {
                    loadFixtures('index.html');
                    chptSpns = document.querySelectorAll(".chptr span");
                    anySpan = _.nth(0)(chptSpns);
                    anyDiv = document.querySelector('.cur');
                    fontSizeProp = 'fontSize';
                });

                it("should move, NOT MUTATE, a span", function () {
                    // code
                    let _appendChild = curry((a_div, a_span) => a_div.appendChild(a_span));
                    // tests
                    let appendedChild = _appendChild(anyDiv, anySpan);// SPN -> DIV -> SPN
                    expect(appendedChild.tagName).to.equal('SPAN');
                    expect(appendedChild).exists;
                    expect(appendedChild).to.deep.equal(anySpan);
                });
                it("should MUTATE the readClss Div", function () {
                    // code
                    let _appendChild = curry((a_div, a_span) => a_div.appendChild(a_span));
                    // tests
                    let appendedChild = _appendChild(anyDiv, anySpan);// SPN -> DIV -> SPN
                    expect(appendedChild.parentElement.tagName).is.equal('DIV');
                    expect(appendedChild.parentElement.className).to.be.equal('cur');
                    expect(appendedChild.parentElement.childElementCount).to.be.equal(1);
                })
            });
        });

    });
describe("build a function: mutateElt() to mutate an Element based on parameters: itsElt, itsNdx, itsNL/",
    function () {
        let chptSpns, anySpan, fontSizeProp;
        beforeEach(() => {
            loadFixtures('index.html');
            chptSpns = document.querySelectorAll(".chptr span");
            anySpan = _.nth(0)(chptSpns);
        });
        describe(" mutate a span given Fn::(elt, e_ndx, e_lst)/", function () {
            beforeEach(() => {
                loadFixtures('index.html');
                chptSpns = document.querySelectorAll(".chptr span");
                anySpan = _.nth(0)(chptSpns);
            });
            describe("initially, confirm the returned Element is unchanged./ ", function () {
                /**
                 *  ..... mutateElt::(elt, e_ndx, e_lst)
                 *  I already have fn: mutateElt_CSD && mutateElt_parent
                 *
                 */
                let mutateElt;
                mutateElt = (elt, e_ndx, e_lst) => {
                    let prop_name = 'junk';
                    let _prop_val = 'junk';
                    return elt
                };
                it("should return the orig elt: /", function () {
                    mutateElt(anySpan, 12345, [4, 3, 2, 1, 0]).should.equal(anySpan);
                });
            });
            describe("now confirm it returns a mutated CSD:: style object/ ", function () {
                /**
                 *  ..... mutateElt::(elt, e_ndx, e_lst)
                 */
                let mutateElt;
                mutateElt = (elt, e_ndx, e_lst) => {
                    let prop_name = 'opacity';
                    let _prop_val = (ndx, lst) => ndx / 10;// TODO use actual formatter
                    elt.style["opacity"] = _prop_val(e_ndx, e_lst);
                    return elt
                };
                it("should return a not empty style property: /", function () {
                    let newElt = mutateElt(anySpan, 'opacity', [2, 1, 0]);
                    newElt.should.exist;
                });
            });
        });
    });
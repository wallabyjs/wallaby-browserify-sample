/**
 * WIP ADDING a composite function - mutateElt(elt, ndx, nl) - to set Elt style mutate its parent div.
 * describe(" mutate a span CSD a span styleProp/"
 * STABLE
 */

"use strict";
// REQUIRES
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
// let _slctElt_byNdx = curry(function (elt_ndx) {// (N:lst_ndx) -> L:elts -> Elt: an elt
//     return _.nth(elt_ndx)
// });
//let _setStylPropLens = _.lensProp;// S -> Lens
// let _aStylDct = _.prop('style'); // D -> D.style
// // functions TO BE USED in compose
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
 *      mutateElt_CSD::( S:prop_name -> a:prop_valu -> Elt: HTML_elt)  -> Elt
 */
const mutateElt_CSD = require('../src/mutateElt').mutateElt_CSD;

/**
 *      _appendChild:: _appendChild:: Elt:div -> Elt:span -> Elt:mutated div
 */
let _appendChild = require('../src/mutateElt')._appendChild;

describe("2 functions that mutate a span's CSD:Styles and its Parent's div.RClss/",
    function () {
        let chptSpns, anySpan, anyDiv;
        beforeEach(() => {
            loadFixtures('index.html');
            chptSpns = document.querySelectorAll(".chptr span");
            anySpan = _.nth(0)(chptSpns);
            // fontSizeProp = 'fontSize';
        });
        describe(" mutate a span's CSD/", function () {
            // TODO maybe use mapObj to set styles
            describe("update an Elt.CSD object i.e.P elt.style}/", function () {
                it("should update the CSD object fontSize  USING _setEltCsd", function () {
                    let stubVal = '40%'; // PLAN: this will be val=f(elt ndx relative to its siblings AND which readCls it is)
                    let stubProp = "fontSize";
                    let newCsd = mutateElt_CSD(stubProp, stubVal);
                    let newSpan = newCsd(anySpan);
                    newSpan.style.fontSize.should.not.equal('');
                    newSpan.style.fontSize.should.equal(stubVal);
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
                    // fontSizeProp = 'fontSize';
                });

                it("should move, NOT MUTATE, a span", function () {
                    let appendedChild = _appendChild(anyDiv, anySpan);// SPN -> DIV -> SPN
                    expect(appendedChild.tagName).to.equal('SPAN');
                    expect(appendedChild).exists;
                    expect(appendedChild).to.deep.equal(anySpan);
                });
                it("should MUTATE the readClss Div", function () {
                    let appendedChild = _appendChild(anyDiv, anySpan);// SPN -> DIV -> SPN
                    expect(appendedChild.parentElement.tagName).is.equal('DIV');
                    expect(appendedChild.parentElement.className).to.be.equal('cur');
                    expect(appendedChild.parentElement.childElementCount).to.be.equal(1);
                })
            });
        });
    });
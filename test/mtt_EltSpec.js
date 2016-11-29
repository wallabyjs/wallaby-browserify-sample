/**
 * describe(" mutate a span parent: readCls/"
 * describe(" mutateCSD a span styleProp/"
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
// let _aStylDct = _.prop('style'); // D -> D.style
// functions TO BE USED in compose
// let _setStylPropValue = val => {
//     // TODO this will evolve to N.ndx -> a.wt
//     return val
// };
// let _viewStylProp = curry(function (prop_name, elt_dct) {
//     return _.view(_setStylPropLens(prop_name), _aStylDct(elt_dct))
// });
//  const _setEltCsd =  curry(function _setEltCsd (prop_name, prop_val, elt_dct) {// (S -> S) -> Elt -> Elt.CSD
//     return _.set(_setStylPropLens(prop_name), _setStylPropValue(prop_val), _aStylDct);
// });

/**
 *  ..... mutateCSD( S:prop_name -> a:prop_valu -> Elt: HTML_elt)  -> Elt
 *  USE:reset a specific HTML Style Object [CSD]  property and returns the mutated Element
 */
let mutateCSD = require('../src/mutateElt').mutateCSD;
// TESTS ----------------------------
describe("mutating Styles/", function () {
    let chptSpns, aSpan, fontSizeProp;
    beforeEach(() => {
        loadFixtures('index.html');
        chptSpns = document.querySelectorAll(".chptr span");
        aSpan = _.nth(0)(chptSpns);
        fontSizeProp = 'fontSize';
    });
    describe(" mutate a span styleProp/", function () {
        describe("update an Elt.CSD object i.e.P elt.style}/", function () {
            it("should update the CSD object fontSize  USING _setEltCsd", function () {
                let newVal = '40%'; // PLAN: this will be val=f(elt ndx relative to its siblings AND which readCls it is)
                let newSpan = mutateCSD(fontSizeProp, newVal)(aSpan);
                newSpan.style.fontSize.should.not.equal('');
                newSpan.style.fontSize.should.equal(newVal);
            });
        });
    });
    describe(" mutate a span parent: readCls/", function () {
        describe("update an Elt.CSD object i.e.P elt.style}/", function () {
            it("should move the spanElt into a divReadCls USING _setEltCsd", function () {
                let newVal = '40%'; // PLAN: this will be val=f(elt ndx relative to its siblings AND which readCls it is)
                // let newSpan = mutate(fontSizeProp, newVal)(aSpan);
                // newSpan.style.fontSize.should.not.equal('');
                // newSpan.style.fontSize.should.equal(newVal);
            });
        });
    });
});
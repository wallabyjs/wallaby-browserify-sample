/**
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
 const _setEltCsd =  curry(function _setEltCsd (prop_name, prop_val, elt_dct) {// (S -> S) -> Elt -> Elt.CSD
    return _.set(_setStylPropLens(prop_name), _setStylPropValue(prop_val), _aStylDct);
});



/**
 *  mutating an Element's CSD:Styles and Parents:RClss
 *  USE:reset a specific HTML Style Object [CSD]  property and returns the mutated Element
 */
// TESTS ----------------------------
// requires
const mutateElt_CSD = require('../src/mutateElt').mutateElt_CSD;
const mutateElt_parent = require('../src/mutateElt').mutateElt_parent;
// const mutateElt = require('../src/mutateElt').mutateElt;

describe("mutating an Element's CSD:Styles and Parents:RClss/",
    function () {
    let chptSpns, aSpan, fontSizeProp;
    beforeEach(() => {
        loadFixtures('index.html');
        chptSpns = document.querySelectorAll(".chptr span");
        aSpan = _.nth(0)(chptSpns);
        fontSizeProp = 'fontSize';
    });
    describe(" mutate a span CSD/", function () {
        describe("update an Elt.CSD object i.e.P elt.style}/", function () {
            it("should update the CSD object fontSize  USING _setEltCsd", function () {
                let newVal = '40%'; // PLAN: this will be val=f(elt ndx relative to its siblings AND which readCls it is)
                let newCsd = mutateElt_CSD(fontSizeProp, newVal);
                let newSpan = newCsd(aSpan);
                newSpan.style.fontSize.should.not.equal('');
                newSpan.style.fontSize.should.equal(newVal);
            });
        });
    });
    describe(" mutate a span parent: readCls/", function () {
        describe("move Elt to div.cur USING mutateElt_parent", function () {
            /**
             *  ..... mutateElt_parent::(Elt:to) -> Elt:me -> Elt:me
             * mutates DOM: using js append and insertBefore.
             */
            it("should move the spanElt into a div.ReadCls USING mutateElt_parent", function () {
                let destElt = document.querySelector('.cur');
                let _moveEltTo_cur = mutateElt_parent(destElt);
                _moveEltTo_cur(aSpan).parentElement.tagName.should.equal('DIV');
                _moveEltTo_cur(aSpan).parentElement.className.should.equal('cur');
            });
        });
    });
    describe(" mutate a span given(elt, e_ndx, e_lst/", function () {
        beforeEach(() => {
            loadFixtures('index.html');
            chptSpns = document.querySelectorAll(".chptr span");
            aSpan = _.nth(0)(chptSpns);
        });
        describe("build mutateElt():params (elt, e_ndx, e_lst) / ", function () {
            /**
             *  ..... mutateElt::(elt, e_ndx, e_lst)
             */
            let mutateElt;
            mutateElt = (elt, e_ndx, e_lst) => {
                // mutateElt_opacityCSD('opacity')
                let prop_name = 'opacity';
                // let _prop_val= (ndx, lst) => ndx / 10;// TODO use actual formatter
                // return mutateElt_CSD(prop_name, _prop_val(e_ndx, e_lst), elt)
             };
            it("should provide args for mutateElt_CSD(e, e_ndx, e_lst)./", function () {
                /** provide mutateElt_CSD params:
                *  S:CSD_prop_name
                *  a:CSD_prop_valu
                *  Elt:elt
                */

                // _moveEltTo_cur(aSpan).parentElement.tagName.should.equal('DIV');
                // _moveEltTo_cur(aSpan).parentElement.className.should.equal('cur');
            });
        });
    });
});
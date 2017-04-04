/**
 * Created by CLIF on 4/4/2017.
 */
"use strict";

let R = require('ramda')
    // , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
//     , curry = R.curry
//     , always = R.always
;

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

// CODE UNDER TEST// todo _> add f(focusNdx) to affect the transforms that EVOLVE_RCBounds USES. 170407 @ 1950
let EVOLVE_RCBounds;
let transforms;
EVOLVE_RCBounds = (trans, dict) => R.evolve(trans, dict); // DICT -> DICT

describe(`the Fn: EVOLVE_RCBounds( Fn:transforms ) -> RCB
    
    // USAGE: EVOLVE_RCBounds WITH the defaultRCBounds partialed, EVOLVES it WITH the transforms Object. It is a f(focusNdx) 
    `, function () {
    beforeEach(function () {
        this.defaultRCB = {focus: {beg: 0, len: 2}};
        this.CUT = EVOLVE_RCBounds(R.__, this.defaultRCB);
    });
    describe(`CONFIRM [defaultRCB] the defaultReadClssBounds IS Valid.
    `, function () {
        it(`should be a DICTionary with at least 2 keys.
    `, function () {
            expect(this.defaultRCB.focus).to.be.an('object').and.to.have.all.keys(['beg', 'len']);
        });
    });
    describe(`CONFIRM EVOLVE_RCBounds is a function wanting a Transforms Fn.`, function () {
        it(`should be a function with one argument.    `, function () {
            expect(this.CUT).to.be.a('function').and.to.have.lengthOf(1);
        });
    });
    describe(`CONFIRM EVOLVE_RCBounds(aTransforms) CAN ALTER the RCBounds DICT.    `, function () {
        it(`can return an altered RCBounds `, function () {
            transforms = {focus: {beg: R.add(20)}};
            expect(this.CUT(transforms).focus).to.be.an('object').and.to.have.all.keys(['beg', 'len']);
        });
        it(`should see an altered key:value    `, function () {
            transforms = {focus: {beg: R.always(20)}};
            expect(this.CUT(transforms).focus.beg).to.equal(20);
        });
    });
    describe(`CONFIRM EVOLVE_RCBounds(aTransforms W/O AN EXISTING Key) WILL NOT ALTER the RCBounds DICT.    `, function () {
        it(`should see UNALTERED key:value    `, function () {
            transforms = {focus: {WRONG: R.always(20)}};
            //
            expect(this.CUT(transforms).focus.beg).to.not.equal(20);
            expect(this.CUT(transforms).focus.beg).to.equal(0);
        });
    });
});
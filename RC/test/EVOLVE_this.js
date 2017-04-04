/**
 * Created by CLIF on 4/4/2017.
 */
"use strict";

let R = require('ramda')
    // , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
//     , curry = R.curry
    , always = R.always
;

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

// CODE UNDER TEST
let EVOLVE_RCBounds;
// EVOLVE_RCBounds = require('../src/EVOLVE_RCBounds'); // LST.[a] -> LST>[N]
let transforms = {focus: {beg: always(111)}};
EVOLVE_RCBounds = R.evolve(transforms); // DICT -> DICT

describe(`the Fn: EVOLVE_RCBounds( N ) -> RCB
    
    USAGE:
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
    describe(`CONFIRM EVOLVE_RCBounds is a function wanting a Transforms Fn.
    `, function () {
        it(`should be a function with one argument.
    `, function () {
            expect(this.CUT).to.be.an('function');
        });
    });
    xdescribe(`A new focusClss beginning, EVOLVES the boundaries between RClsses.
    `, function () {
        it(`should be a Dictionary with at least 2 keys.
    `, function () {
            expect(this.CUT).to.be.an('object');
        });
    });
});
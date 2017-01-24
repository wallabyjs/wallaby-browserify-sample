/**
 * Created by CLIF on 1/19/2017.
 */
"use strict";

let R = require('ramda');

let mocha = require('mocha');
let describe = mocha.describe;
let it = mocha.it;
// let beforeEach = mocha.beforeEach;
// let before = mocha.before;
// let only = mocha.only;
//
let chai = require('chai'),
    expect = chai.expect,
    should =  chai.should();

// DATA
let CsdLimits = require('../data/all_CsdLimits');
// let CsdLimits = {
//     pst: {csdBeg: 0.2, csdEnd: 1.0},
//     cur: {csdBeg:1, csdEnd:1},
//     fut: {csdBeg:1, csdEnd:.4}};

//CODE
let a_ReadClss_CsdLimits = require('../src/get_aReadClss_CsdLimits');

describe(`a_ReadClss_CsdLimits(STR) -> DCT:: returns a NAMED ReadClass CsdLimits DCT,
   e.g. Pst_CsdLimits`, function () {
    let Pst_CsdLimits = a_ReadClss_CsdLimits('pst');// DCT -> STR -> DCT
    describe("Pst_CsdLimits:: returns just the CsdLimits for the 'pst' read class.", function () {
        it("should have two limits keys", function () {
            Pst_CsdLimits.should.have.property('csdBeg');
            Pst_CsdLimits.should.have.property('csdEnd');

        });
        it("should have key values", function () {
            Pst_CsdLimits.csdBeg.should.equal(0.2);
            Pst_CsdLimits.csdEnd.should.equal(1.0);
        });
    });
});

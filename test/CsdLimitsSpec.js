/**
 * Created by CLIF on 1/19/2017.
 */
"use strict";

let R = require('ramda');

let mocha = require('mocha');
let describe = mocha.describe;
let it = mocha.it;
let beforeEach = mocha.beforeEach;
let before = mocha.before;
let only = mocha.only;
//
let chai = require('chai'),
expect = chai.expect,
should =  chai.should();

let CsdLimits = require('../data/CsdLimits');
// console.log(CsdLimits);

describe(`CsdLimits:: returns a Dct w/ 3 read class each with a csdBeg and csdEnd value.`, function () {
    // CsdLimits = {
    //     pst: {csdBeg: 0.2, csdEnd: 1.0},
    //     cur: {csdBeg:1, csdEnd:1},
    //     fut: {csdBeg:1, csdEnd:.4}};
    it("should exist and be an object..", function () {
        CsdLimits.should.exist;
        CsdLimits.should.be.an('object');
    });
    it("should be a Dct with three keys..", function () {
        CsdLimits.should.have.property('pst');
        CsdLimits.should.have.property('cur');
        CsdLimits.should.have.property('fut');
    });
    it("should have a pst:csdBeg:0.2 && csdEnd:0.8.", function () {
        CsdLimits.pst.csdBeg.should.equal(0.2);
        CsdLimits.pst.csdEnd.should.equal(1);
    });
});

/**
 * composeWter_FormatterSpec
 * composeWter_FormatterSpec.js
 * CLEANED UP descriptions and names. Then continue to make a module that accepts Arguments: aLstOf_ReadClss_Verses, aDctOf_ReadClssLimits, theNdxOf_CurReadClss_Elems -> aLstOf_ReadClss_Verses
 */
"use strict";

// REQUIRES
let R = require('ramda');
let __ = R.__;
let compose = R.compose;
let divide = R.divide;
let multiply = R.multiply;
let concat = R.concat;
let always = R.always;
let prop = R.prop;
let length = R.length;
let curry = R.curry;
//
let mocha = require('mocha');
let describe = mocha.describe;
let it = mocha.it;
let beforeEach = mocha.beforeEach;
let before = mocha.before;
let only = mocha.only;
//
let chai = require('chai');
let should = chai.should();
let expect = chai.expect;
let have = chai.have;

// HELPERS
let roundToTwoPlaces = compose(
    divide(__, 100), Math.round, multiply(100)
);// N -> N

let _toFixedTwo = x => x.toFixed(2);// a -> "a.xx":
let formatOpacity = compose(_toFixedTwo);//a -> STR
//let formatFontSize = compose( append("%"), toString, multiply(100), _toFixedTwo);// N -> STR
let formatFontSize = compose(concat(__, '%'), toString, multiply(100), _toFixedTwo);// N -> STR

// CODE
let _CsdLimits, CsdLimits;
describe("_CsdLimits():: returns Dct of csd limits for all ReadingClsses.", function () {
    describe(`_CsdLimits:: [a TEST STUB] has 3 read class Dct, each with a csdBeg and csdEnd value.')`, function () {
        CsdLimits = {pst: {csdBeg: 0.2, csdEnd: 0.80}, cur: {}, fut: {}};
        _CsdLimits = always(CsdLimits);// -> DCT
        it("should be a Dct with three keys..", function () {
            _CsdLimits().should.have.property('pst');
            _CsdLimits().should.have.property('cur');
            _CsdLimits().should.have.property('fut');
        });
        it("should have a pst:csdBeg:0.2 && csdEnd:0.8.", function () {
            _CsdLimits().pst.csdBeg.should.equal(0.2);
            _CsdLimits().pst.csdEnd.should.equal(0.8);
        });
    });
});

let _ElemWTER, Elem_WT;
describe(`_ElemWTER:: this_Elem's relative Weight asFnOf 
        Its_ReadClss and
        Its_RelativePosition 
            withIn Its ElemFamily::
             D -> L -> N -> N`, function () {

    let _beg = prop('csdBeg');// DCT -> a
    let _end = prop('csdEnd');// DCT -> a
    let _siz = length;// LST -> N
    _ElemWTER = curry((dct, lst, ndx) => (_end(dct) - _beg(dct)) / _siz(lst) * ndx + _beg(dct));

    // some tests
    // Len: 0    1   2   3   4   5
    // Ndx: 0   .50 .33 .25 .20 .17
    //      1       .67 .50 .40 .33
    //      2               .60 .50
    //      3               .80 .67
    //      4                   .83
    it("should return weights[csdBeg, csdEnd] for lst.length: 1", function () {
        _ElemWTER(_CsdLimits().pst)([0])(0).should.equal(0.5);
    });
    xit("should return weights[csdBeg, csdEnd] for lst.length: 2", function () {
        _ElemWTER(_CsdLimits().pst)([0, 1])(0).should.equal(0.2);
        _ElemWTER(_CsdLimits().pst)([0, 1])(1).should.equal(0.8);
    });
});// .2 + (((.8-.2) ->.6) / 2 * 1 -> .3) + .2 -> .5


// Elem_WT ASSERTS
// Elem_WT(3);// 3-> ~0.9
// // assert(Elem_WT(3)=== 0.8, "Exp:  Elem_WT(3)===0.8"); // yields "Error: Assert failed: Expected true" in console
// Elem_WT(0);// 0-> 0.2
// // assert(Elem_WT(0)=== 0.2, "Exp:  Elem_WT(0)===0.2"); // executes without problem
// Elem_WT(2);// 2-> 0.6
// // assert(Elem_WT(2)=== 0.6, "Exp:  Elem_WT(2)===0.6"); // yields "Error: Assert failed: Expected true" in console
// Elem_WT(1);// 1-> 0.4
// // assert(Elem_WT(1)=== 0.4, "Exp:  Elem_WT(1)===0.4"); // yields "Error: Assert failed: Expected true" in console
// // ASSERTS
// formatOpacity(.4);// .4 -> "0.4"
// formatFontSize(.456);// .456 -> "46%"
//
// // NOW compose and make thisElem_FontSize
// let thisElem_PstClss_FontSizeCSD = compose(formatFontSize, Elem_WT);// N -> S
// thisElem_PstClss_FontSizeCSD(3);// 3 -> "80%"
//
// describe("thisElem_PstClss_FontSizeCSD", function () {
//     xit("should ..", function () {
//         thisElem_PstClss_FontSizeCSD(3).should.equal('80%');
//     });
// });
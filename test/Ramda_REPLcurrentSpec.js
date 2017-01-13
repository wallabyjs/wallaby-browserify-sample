/**
 * Created by CLIF on 1/12/2017.
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

// HELPERS
let roundToTwoPlaces = compose(
    divide(__, 100), Math.round, multiply(100)
);// N -> N

let _toFixedTwo = x => x.toFixed(2);// a -> "a.xx":
let formatOpacity = compose(_toFixedTwo);//a -> STR
//let formatFontSize = compose( append("%"), toString, multiply(100), _toFixedTwo);// N -> STR
let formatFontSize = compose(concat(__, '%'), toString, multiply(100), _toFixedTwo);// N -> STR

// CODE
let CsdLimits, _CsdLimits;
describe("_CsdLimitsDCT: returns Dct of csd limits for each ReadingClss ", function () {
    describe(`CsdLimits:: is just a TEST STUB -> DCT now; later use a 'require('CsdLimitsDct')`, function () {
        CsdLimits = {pst: {csdBeg: 0.2, csdEnd: 0.80}, cur: {}, fut: {}};
        _CsdLimits = always(CsdLimits);// -> DCT

        it("should be a Dct with three keys..", function () {
            _CsdLimits().should.have.property('pst');
            _CsdLimits().should.have.property('cur');
            _CsdLimits().should.have.property('fut');
        });
    });
})
;

let _ReadClss_CsdLimits, Pst_CsdLimits;
describe("_ReadClss_CsdLimits: returns a named read ReadClasses limits:: STR -> DCT", function () {
    _ReadClss_CsdLimits = compose(prop(__, CsdLimits));// S -> Dct
    describe("Pst_CsdLimits:: returned this specific( 'pst') ReadClss_CsdLimits.", function () {
        Pst_CsdLimits = _ReadClss_CsdLimits('pst');// DCT -> STR -> DCT
        it("should ..", function () {
            Pst_CsdLimits.should.have.property('csdBeg').and.equal(0.2);
            Pst_CsdLimits.should.have.property('csdEnd');
        });
    });
});



// // and using a test ElemFamLst
let ElFam = [0, 1, 2];//-> length:3

let wt, wtER, ReadClss_WtER, ElemFam_ReadClss_WtER, thisElem_WtER;
describe("build a procedural ElemWeightER:: D -> L -> N -> N", function () {
    describe(`wt:: this_Elem's relative Weight asFnOf 
        Its_ReadClss and
        Its_RelativePosition withIn Its ElemFamily.
    :: D -> L -> N -> N`, function () {
        let _beg = prop('csdBeg');// DCT -> a
        let _end = prop('csdEnd');// DCT -> a
        let _siz = length;// LST -> N
        wt = curry((dct, lst, ndx) => (_end(dct) - _beg(dct)) / _siz(lst) * ndx + _beg(dct));
    });
});

ReadClss_WtER = wt(Pst_CsdLimits, __, __);// LST -> N -> N

ElemFam_ReadClss_WtER = wt(Pst_CsdLimits, ElFam, __);// N -> N

thisElem_WtER = compose(roundToTwoPlaces, ElemFam_ReadClss_WtER);// N -> N

// thisElem_WtER ASSERTS
thisElem_WtER(3);// 3-> ~0.9
// assert(thisElem_WtER(3)=== 0.8, "Exp:  thisElem_WtER(3)===0.8"); // yields "Error: Assert failed: Expected true" in console
thisElem_WtER(0);// 0-> 0.2
// assert(thisElem_WtER(0)=== 0.2, "Exp:  thisElem_WtER(0)===0.2"); // executes without problem
thisElem_WtER(2);// 2-> 0.6
// assert(thisElem_WtER(2)=== 0.6, "Exp:  thisElem_WtER(2)===0.6"); // yields "Error: Assert failed: Expected true" in console
thisElem_WtER(1);// 1-> 0.4
// assert(thisElem_WtER(1)=== 0.4, "Exp:  thisElem_WtER(1)===0.4"); // yields "Error: Assert failed: Expected true" in console
// ASSERTS
formatOpacity(.4);// .4 -> "0.4"
formatFontSize(.456);// .456 -> "46%"

// NOW compose and make thisElem_FontSize
let thisElem_PstClss_FontSizeCSD = compose(formatFontSize, thisElem_WtER);// N -> S
thisElem_PstClss_FontSizeCSD(3);// 3 -> "80%"

describe("thisElem_PstClss_FontSizeCSD", function () {
    xit("should ..", function () {
        thisElem_PstClss_FontSizeCSD(3).should.equal('80%');
    });
});
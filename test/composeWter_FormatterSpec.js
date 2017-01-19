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
let add = R.add;
let toString = R.toString;
let identity = R.identity;
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
let sayX = x => console.log('x is ' + x);
let myTap = R.tap(sayX);// a => a and 'x is a' in console.log

let _toFixedTwo = x => x.toFixed(2);// a -> "a.xx":
let _formatOpacity = compose(_toFixedTwo);//a -> STR
describe("_formatOpacity(a)->STR", function () {
    it("should return a STR:a", function () {
        _formatOpacity(.4027899).should.equal('0.40');
    });
});

let _formatFontSize = compose(concat(__, '%'), myTap, toString, multiply(100), roundToTwoPlaces);// N -> STR
describe("_formatFontSize(a)-> a*100, toString + '%'", function () {
    it("should return '46%' given 0.456  ", function () {
        _formatFontSize( 0.456789).should.equal("46%");
    });
});

// DATA
// let CsdLimits = require('../data/CsdLimits'); NOTE: already required in _ReadClss_CsdLimits

// FUNCTIONS
let _ReadClss_CsdLimits; // STR.readClssName -> DCT.readClss_CsdLimits
_ReadClss_CsdLimits = require('../src/ReadClss_CsdLimits');

let _ElemWTER, Elem_WT;// D->L->N -> N
xdescribe(`_ElemWTER:: D -> L -> N -> N returns this_Elem's relative Weight 
        asFnOf  Its_ReadClss 
        and     Its_RelativePosition 
            withIn Its ElemFamily`, function () {

    let _beg = prop('csdBeg');// DCT -> a
    let _end = prop('csdEnd');// DCT -> a
    let _delta = dct => {return _end(dct) - _beg(dct)};
    it("_delta(dct) should be 1-.2->.8", function () {
        let PstCsd = _ReadClss_CsdLimits('pst');
        _delta(PstCsd).should.equal(.8);
    });
    let _incLength = compose(add(1), length);// LST -> N
    it("_incLength(['a']) should be 2", function () {
        _incLength(['a']).should.equal(2);
    });
    let _incNdx = add(1);

    _ElemWTER = curry(
        // (dct, lst, ndx) => _delta(dct) / _incLength(lst) * ( 1+ndx) + _beg(dct)
        (dct, lst, ndx) => roundToTwoPlaces(_delta(dct) / _incLength(lst) * _incNdx(ndx) + _beg(dct))); //.8/2*1+.2 ->.6
    // wt = delta / (len+1) * (ndx+1)
    // some pst tests for pst: {csdBeg: 0.2, csdEnd: 1.0}
    // Len: 0    1   2   3   4   5
    // Ndx: 0   .6  .47 .40     0.33
    //      1       .73 .60     0.47
    //      2           .80     0.60
    //      3                   0.73
    //      4                   0.87

    it("should return weights:PstCsdLimits:{csdBeg: 0.2, csdEnd: 1.0}, Lst:[0], ndx:0", function () {
        // ((1 -.2 -> .8)/(0+2->2))-> .4 * (0+1->1) + .2 -> .6
        _ElemWTER(Pst_CsdLimits, [0],0).should.equal(0.6);// .8/2*1 + .2  ->
    });
    it("should return weights[csdBeg, csdEnd] for lst.length:2", function () {
        _ElemWTER(_CsdLimits().pst)([0, 1])(0).should.equal(0.47);// .8 / 3 * 1 + .2 -> .47
        _ElemWTER(_CsdLimits().pst)([0, 1])(1).should.equal(0.73); //.8 / 3 * 2 + .2 -> .73
    });
    it("should return weights[csdBeg, csdEnd] for lst.length:2", function () {
        _ElemWTER(_CsdLimits().pst)([0, 1])(0).should.equal(0.47);// .8 / 3 * 1 + .2 -> .47
        _ElemWTER(_CsdLimits().pst)([0,1,2,3,4])(4).should.equal(0.87);
    });
});

let _Elem_ReadClss_WTER;// S->L->N -> N
xdescribe("_Elem_ReadClss_WTER(S,L,N) REFACTED w/ R.useWith from _ElemWTER(D,L,N) ", function () {
    _Elem_ReadClss_WTER = R.useWith(_ElemWTER, [_ReadClss_CsdLimits, identity, identity]); // Str -> L, N -> N
    it("should expect the 1st argument as a String", function () {
        _Elem_ReadClss_WTER('pst')( ['a', 'b'], 0).should.equal(.47);
        _Elem_ReadClss_WTER('pst')( ['a', 'b'], 1).should.equal(.73);
        _Elem_ReadClss_WTER('fut')( ['a', 'b', 'c'], 0).should.equal(.4);// -.6/2*1+1
    });
});


let thisElem_PstClss_FontSizeCSD = compose(_formatFontSize, _ElemWTER);// N -> S
thisElem_PstClss_FontSizeCSD(3);
describe("thisElem_PstClss_FontSizeCSD", function () {
    xit("should ..", function () {
        thisElem_PstClss_FontSizeCSD(3).should.equal('80%');
    });
});
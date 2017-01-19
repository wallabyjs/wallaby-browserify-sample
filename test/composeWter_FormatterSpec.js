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

// FUNCTIONS
let roundToTwoPlaces = require('../h/roundToTwoPlaces');

let _ReadClss_CsdLimits; // STR.readClssName -> DCT.readClss_CsdLimits
_ReadClss_CsdLimits = require('../src/ReadClss_CsdLimits');

let _formatOpacity; // a -> STR
_formatOpacity = require('../src/Elem_Style_Formatters')._formatOpacity;

let _formatFontSize;// N -> STR
_formatFontSize = require('../src/Elem_Style_Formatters')._formatFontSize;


// CODE UNDER TEST
let _ElemWTER = ()=>{}, Elem_WT;// D->L->N -> N
describe(`_ElemWTER:: D -> L -> N -> N returns this_Elem's relative Weight 
        asFnOf  Its_ReadClss 
                to set its Weight Limits
        and     Its_RelativePosition 
                withIn  Its ElemFamily`, function () {

    let _beg = prop('csdBeg');// DCT -> a
    let _end = prop('csdEnd');// DCT -> a
    let _delta = dct => _end(dct) - _beg(dct);

    it("_delta(dct) should be 1-.2->.8", function () {
        _delta({csdEnd:1, csdBeg:.2}).should.equal(.8);
    });
    let _incLength = compose(add(1), length);// LST -> N
    it("_incLength(['a']) should be 2", function () {
        _incLength(['a']).should.equal(2);
    });
    let _incNdx = add(1);

    _ElemWTER = curry(
        // (dct, lst, ndx) => _delta(dct) / _incLength(lst) * ( 1+ndx) + _beg(dct)
        (dct, lst, ndx) => roundToTwoPlaces(_delta(dct) / _incLength(lst) * _incNdx(ndx) + _beg(dct))); //.8/2*1+.2 ->.6
    // PstCsdLimits = {csdBeg: 0.2, csdEnd: 1.0}
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
        _ElemWTER({csdBeg: 0.2, csdEnd: 1.0}, [0],0).should.equal(0.6);// .8/2*1 + .2  ->
    });
    it("should return weights[csdBeg, csdEnd] for lst.length:2", function () {
        _ElemWTER({csdBeg: 0.2, csdEnd: 1.0},[0, 1])(0).should.equal(0.47);// .8 / 3 * 1 + .2 -> .47
        _ElemWTER({csdBeg: 0.2, csdEnd: 1.0})([0, 1])(1).should.equal(0.73); //.8 / 3 * 2 + .2 -> .73
    });
    it("should return weights[csdBeg, csdEnd] for lst.length:2", function () {
        _ElemWTER({csdBeg: 0.2, csdEnd: 1.0})([0, 1])(0).should.equal(0.47);// .8 / 3 * 1 + .2 -> .47
        _ElemWTER({csdBeg: 0.2, csdEnd: 1.0})([0,1,2,3,4])(4).should.equal(0.87);
    });
});

let _Elem_ReadClss_WTER;// S->L->N -> N
_Elem_ReadClss_WTER = R.useWith(_ElemWTER, [_ReadClss_CsdLimits, identity, identity]); // Str -> L, N -> N

describe("_Elem_ReadClss_WTER(S,L,N) REFACTED w/ R.useWith from _ElemWTER(D,L,N) ", function () {
    it(`CONFIRM data/CsdLimits.pst should deep = { csdBeg: 0.2, csdEnd: 1.0 }`, function () {
        let CsdLimits = require('../data/CsdLimits');
        // console.log(CsdLimits.pst);
        (CsdLimits.pst).should.deep.equal( { csdBeg: 0.2, csdEnd: 1.0 });
    });
    it("should expect the 1st argument as a String", function () {
        _Elem_ReadClss_WTER(('pst'),  ['a', 'b'], 0).should.equal(.47);
        _Elem_ReadClss_WTER('pst')( ['a', 'b'], 1).should.equal(.73);
        // ref Fut_ReadClss:     fut: {csdBeg:1, csdEnd:.4}};
        _Elem_ReadClss_WTER('fut')( ['a', 'b', 'c', ], 0).should.equal(.85);// (.4-1 -> -.6)/(3+1)*(0+1) +1 -> -.6/4 -> -.15 +1
    });
});


let thisElem_PstClss_FontSizeCSD = compose(_formatFontSize, _ElemWTER);// N -> S
thisElem_PstClss_FontSizeCSD(3);
describe("thisElem_PstClss_FontSizeCSD", function () {
    xit("should ..", function () {
        thisElem_PstClss_FontSizeCSD(3).should.equal('80%');
    });
});
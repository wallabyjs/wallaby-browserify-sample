"use strict";

// REQUIRES
let R = require('ramda');

let mocha = require('mocha');
let describe = mocha.describe;
let it = mocha.it;

let chai = require('chai');
let should = chai.should();
let expect = chai.expect;

// FUNCTIONS
let roundToTwoPlaces = require('../h/roundToTwoPlaces');

let _ReadClss_CsdLimits; // STR.readClssName -> DCT.readClss_CsdLimits
_ReadClss_CsdLimits = require('../src/get_aReadClss_CsdLimits');

let _formatOpacity; // a -> STR
_formatOpacity = require('../src/format_anElem_Style')._formatOpacity;

let _formatFontSize;// N -> STR
_formatFontSize = require('../src/format_anElem_Style')._formatFontSize;

// CODE UNDER TEST
let _ElemWTER = require('../src/weight_aReadClss_Elem')._ElemWTER;// D->L->N -> N

describe(`_ElemWTER:: D -> L -> N -> N returns this_Elem's relative Weight 
        asFnOf  Its_ReadClss 
                to set its Weight Limits
        and     Its_RelativePosition 
                withIn  Its ElemFamily`, function () {
    let limitsDct ={csdBeg: 0.2, csdEnd: 1.0};
    it("should return a weight given a limitsDct, Lst:[0], ndx:0", function () {
        // ((1 -.2 -> .8)/(0+2->2))-> .4 * (0+1->1) + .2 -> .6
        _ElemWTER(limitsDct, [0],0).should.equal(0.6);// .8/2*1 + .2  ->
    });
    it("should return a weight given a limitsDct, lst.length:2, and two indexes.", function () {
        _ElemWTER(limitsDct,[0, 1])(0).should.equal(0.47);// .8 / 3 * 1 + .2 -> .47
        _ElemWTER(limitsDct,[0, 1])(1).should.equal(0.73); //.8 / 3 * 2 + .2 -> .73
    });
    it("should return a weight given a limitsDct,r lst.length:5, and two indexes.", function () {
        _ElemWTER(limitsDct)([0, 1,2,3,4])(0).should.equal(0.33);
        _ElemWTER(limitsDct)([0,1,2,3,4])(4).should.equal(0.87);
    });
});

// NOW CODE for a specific ReadClass'a elements
let weight_aReadClss_Elem;// S->L->N -> N
weight_aReadClss_Elem = require('../src/weight_aReadClss_Elem').weight_aReadClss_Elem;// D->L->N -> N

describe("a weight_aReadClss_Elem(expects a ReadClss Name as its 1st arg and return an Elements relative weight.", function () {
    let arg1 = 'pst';

    it(`should expect the first arg is a string`, function () {
        arg1.should.be.a('String')
    });
    it("should return Element relative weights for a specific ReadClss, elem_lst, elem_ndx.", function () {
        weight_aReadClss_Elem((arg1),  ['a', 'b'], 0).should.equal(.47);
        weight_aReadClss_Elem(arg1)( ['a', 'b'], 1).should.equal(.73);
        // ref Fut_ReadClss:     fut: {csdBeg:1, csdEnd:.4}};
        weight_aReadClss_Elem('fut')( ['a', 'b', 'c', ], 0).should.equal(.85);// (.4-1 -> -.6)/(3+1)*(0+1) +1 -> -.6/4 -> -.15 +1
    });
});
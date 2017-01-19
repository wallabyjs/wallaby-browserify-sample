/**
 * Created by CLIF on 1/19/2017.
 */
"use strict";

let R = require('ramda');
let compose = R.compose;

let mocha = require('mocha');
let describe = mocha.describe;
let it = mocha.it;
//
let chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

// let roundToTwoPlaces = require('../h/roundToTwoPlaces');

let _Elem_ReadClss_WTER; // S->L->N -> N
_Elem_ReadClss_WTER = require('../src/weight_anElem')._Elem_ReadClss_WTER;

let _formatOpacity; // a -> STR
_formatOpacity = require('../src/format_anElem_Style')._formatOpacity;

let _formatFontSize;// N -> STR
_formatFontSize = require('../src/format_anElem_Style')._formatFontSize;

describe(`compose Fn:: S.clssName->N->LST -> S.Csd`, function () {
    // test data
    let clssLimitsStr = 'pst';
    let elemNdx = 0;
    let elemLst = ['a', 'b'];

    describe(`1ST a _Elem_ReadClss_WTER:: S->N->L-> n_wt.`, function () {
        it(`should have a new weight`, function () {
            _Elem_ReadClss_WTER(clssLimitsStr)(elemLst, elemNdx ).should.equal(0.47);
        });
    });
    describe(`compose(_formatFontSize, _Elem_ReadClss_WTER)::S,N,L->S to produce an fontSize property Csd: value.`, function () {
        it(`should return a CsdProperty Str`, function () {
            R.compose( _formatFontSize, _Elem_ReadClss_WTER)('pst', ['a','b'], 0).should.equal('47%');
        });
    });
    describe(`compose(_formatOpacity, _Elem_ReadClss_WTER)::S,N,L->S to produce a opacity property Csd:value.`, function () {
        it(`should return a CsdProperty: value Str`, function () {
            R.compose( _formatOpacity, _Elem_ReadClss_WTER)('pst', ['a','b'], 0).should.equal('0.47');
        });
    });
    xdescribe(`Fn: maps N.weight on to both opacity and fontSize properties and combines them.`, function () {
        it(`should return a composite opacity and fontSize CsdProperty Str`, function () {
            let x = R.compose(_formatOpacity, _Elem_ReadClss_WTER('pst', ['a','b']));
            expect(x(0)).to.deep.equal({opacity:'0.47'},{fontSize:'47%'});
        });
    });
});

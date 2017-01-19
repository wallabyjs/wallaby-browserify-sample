/**
 * Created by CLIF on 1/19/2017.
 */
"use strict";

let R = require('ramda');
let compose = R.compose;

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

let sayX = x => console.log('x is ' + x);
let myTap = R.tap(sayX);// a => a and 'x is a' in console.log

let _toFixedTwo = x => x.toFixed(2);// a -> "a.xx":
let roundToTwoPlaces = R.compose(
    R.divide(R.__, 100), Math.round, R.multiply(100)
);// N -> N


let _formatOpacity; // a -> STR
_formatOpacity = require('../src/Elem_Style_Formatters')._formatOpacity;
describe("_formatOpacity(a)->STR", function () {
    it("should return a STR:a", function () {
        _formatOpacity(.4027899).should.equal('0.40');
    });
});

let _formatFontSize;// N -> STR
_formatFontSize = require('../src/Elem_Style_Formatters')._formatFontSize;
describe("_formatFontSize(a)-> a*100, toString + '%'", function () {
    it("should return '46%' given 0.456  ", function () {
        _formatFontSize( 0.456789).should.equal("46%");
    });
});
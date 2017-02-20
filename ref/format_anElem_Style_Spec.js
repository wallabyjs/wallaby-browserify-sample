/**
 * Created by CLIF on 1/19/2017.
 */
"use strict";

let R = require('ramda');
let compose = R.compose;

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

let _formatOpacity; // N -> STR
_formatOpacity = require('format_anElem_Style')._formatOpacity;

describe("_formatOpacity(N)->STR", function () {
    it("should return a STR:a", function () {
        _formatOpacity(.4027899).should.be.a('String');
        _formatOpacity(.4027899).should.equal('0.40');
    });
});

let _formatFontSize;// N -> STR
_formatFontSize = require('format_anElem_Style')._formatFontSize;
describe("_formatFontSize(a)-> a*100, toString + '%'", function () {
    it("should return '46%' given 0.456  ", function () {
        _formatFontSize( 0.456789).should.a('String');
        _formatFontSize( 0.456789).should.equal("46%");
    });
});
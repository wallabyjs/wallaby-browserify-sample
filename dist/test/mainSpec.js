"use strict";
// REQUIRES

var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;
var beforeEach = mocha.beforeEach;
var before = mocha.before;
var only = mocha.only;
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
// let be = chai.be;

var _ = require('ramda');
var compose = _.compose;
var curry = _.curry;
//---------------------------
var isNodeList = require('../h/isNodeList');

describe("main: mutates each Chapter's Element's Style to reflect it's ReadingClss NAME and it's relative position within that ReadingClss list.", function () {
    // TODO continue to REFACT this.
    describe("A Book has Chapter DIVs", function () {
        describe('each Book has a Dictionary of Style Properties DCT: \n            typically opacity, fontSize, etc', function () {});
    });
    describe(" A Chapter is a Lst of Spans segregated into three ReadClss DIV:['past', 'current', 'future']", function () {
        describe('each Chapter', function () {});

        describe("each ReadClss has its own Elem Style Weighting Limits keys: csdBeg and csdEnd  ", function () {
            describe('Elem Style Weighting is a function of its\n                    relative position with its peers\n                and its \n                    ReadClss Weighting Limits.', function () {
                xit('should ..', function () {
                    1..should.equal(0);
                });
            });
        });
    });
    describe("A ReadClss is a sub Lst of Spans determined by a reader's keyBoard Event", function () {
        describe("The Current ReadingClss has two defining properties: begNdx and listLength.", function () {
            describe("The begNdx is set by keyBoard Event Handler", function () {
                xit("should ..", function () {
                    1..should.equal(0);
                });
            });
            describe("The current list length is relatively fix by a curLen: key in Dct", function () {
                xit('should ..', function () {
                    1..should.equal(0);
                });
            });
        });
        describe("The Past and Future ReadingClsses are defined relative to the Current RC", function () {});
    });
    describe("A Elem Span Style is set ", function () {});
});
//# sourceMappingURL=mainSpec.js.map
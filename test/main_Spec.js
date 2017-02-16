"use strict";
// REQUIRES
let mocha = require('mocha');
let describe = mocha.describe;
let it = mocha.it;
let beforeEach = mocha.beforeEach;
let before = mocha.before;
let only = mocha.only;
let chai = require('chai');
let should = chai.should();
let expect = chai.expect;
// let be = chai.be;

let R = require('ramda'),
    curry = R.curry,
    pipe = R.pipe,
    compose = R.compose;
//---------------------------
let isNodeList = require('../h/isNodeList');
let _mutate = require('../src/mutateTheFirstLine');



describe("main: mutates each Chapter's Element's Style to reflect it's ReadingClss NAME and it's relative position within that ReadingClss list.", function () {
    let dom, anElem;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        dom = document;
    });
    it("should .", function () {
        let anElem = dom.querySelector('span');
        // BEFORE: hard code anElem
        anElem.style.backgroundColor = 'pink';
        anElem.style.opacity = '0.99';
        anElem.style.color = 'red';
        _mutate(dom);
        anElem.style.color.should.equal('green');
        anElem.style.opacity.should.equal('0.4');
        anElem.style.fontSize.should.equal('60%');
        // anElem.style.background.should.equal('rgb(255, 192, 203)');
    });
        xdescribe("A Book has Chapter DIVs", function () {
            describe(`each Book has a Dictionary of Style Properties DCT: 
            typically opacity, fontSize, etc`, function () {

            });
        });
        xdescribe(" A Chapter is a Lst of Spans segregated into three ReadClss DIV:['past', 'current', 'future']", function () {
            describe(`each Chapter`, function () {

            });

            describe("each ReadClss has its own Elem Style Weighting Limits keys: csdBeg and csdEnd  ", function () {
                describe(`Elem Style Weighting is a function of its
                    relative position with its peers
                and its 
                    ReadClss Weighting Limits.`, function () {
                    it(`should ..`, function () {
                        (0).should.equal(0);
                    });
                });
            });
        });
        xdescribe("A ReadClss is a sub Lst of Spans determined by a reader's keyBoard Event", function () {
            describe("The Current ReadingClss has two defining properties: begNdx and listLength.", function () {
                describe("The begNdx is set by keyBoard Event Handler", function () {
                    xit("should ..", function () {
                        (1).should.equal(0);
                    });
                });
                describe("The current list length is relatively fix by a curLen: key in Dct", function () {
                    xit(`should ..`, function () {
                        (1).should.equal(0);
                    });
                });
            });
            describe("The Past and Future ReadingClsses are defined relative to the Current RC", function () {
            });
        });
        xdescribe("A Elem Span Style is set ", function () {

        });
    });
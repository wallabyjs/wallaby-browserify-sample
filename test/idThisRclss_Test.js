
/**
 *  idThisRclss_Test.js
 */
"use strict";

let R = require('ramda');
// let compose = R.compose;
let curry = R.curry;

let chai = require('chai'),
//     should = chai.should,
    expect = chai.expect;
//


let thisID = require('../src/idThisRclss').Fn00;
let thisID1 = require('../src/idThisRclss').Fn01;

let currBounds = {beg: 2, lng: 2};
let elArg = {el:'', ndx:0, lst:[0, 1, 2, 3, 4]};

describe(`thisID returns the Rclss Identity of an Element of a Set `, () => {
    describe(`thisID has params: CurrentRclssBoundsDict && elem params`, () => {
        it(`should be a function of length 4`, () => {
            expect(thisID).to.be.a('function').with.lengthOf(4);
        });
        it(`partialed it should  to be function of length 3`, () => {
            expect(thisID(currBounds)).to.be.a('function').with.lengthOf(3);
        });
        it(`partialed more it should  to be function of length 1`, () => {
            expect(thisID(currBounds)('', R.__, [])).to.be.a('function').with.lengthOf(1);
        });

    });


    describe(`thisID is a partial invoked  thisID(currBounds, elArg.el, R.__, elArg.lst) `, () => {
        let cut;
        beforeEach(() => {
            cut = thisID(currBounds)('', R.__, []);
        });
        it(` invoked it should return an Rclss name`,
             () => {
            expect(cut(0)).to.equal('pst');
            expect(cut(1)).to.equal('pst');
            expect(cut(2)).to.equal('cur');
            expect(cut(3)).to.equal('cur');
            expect(cut(4)).to.equal('fut');
        });
    });
    describe(`Begin testsd against border and error input `, () => {
        let cut1;
        beforeEach(() => {
            cut1 = thisID1(currBounds)('', []);
        });
        it(` 
        Test: thisID invoked with elemNdx < elemList.length and > elemList.length; 
        The returned names are valid. 
        BUT are they HARMFULL when passes on to the next Fn? 
        OR will they ever be used?
        The input elemList WILL ALWAYS = 0 OR greater untill it's length`, () => {
            expect(cut1(-11)).to.equal('pst');
            expect(cut1(-1)).to.equal('pst');
            expect(cut1(0)).to.equal('pst');
            expect(cut1(1)).to.equal('pst');
            expect(cut1(2)).to.equal('cur');
            expect(cut1(3)).to.equal('cur');
            expect(cut1(4)).to.equal('fut');
            expect(cut1(elArg.lst.length)).to.equal('fut', 'Even though list.length as an index is beyond the range of the list.');
            expect(cut1(10)).to.equal('fut');
        });
    });
});

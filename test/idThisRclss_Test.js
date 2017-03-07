
/**
 *  lets name this module. identityRclss OR IdentityOfRclss OR idRclss OR idThisRclss
 */
"use strict";

let R = require('ramda');
// let compose = R.compose;
let curry = R.curry;

let chai = require('chai'),
//     should = chai.should,
    expect = chai.expect;
//


let Fn00 = require('../src/idThisRclss').Fn00;
let thisID = require('../src/idThisRclss').Fn00;

let currBounds = {beg: 2, lng: 2};
let elArg = {el:'', ndx:0, lst:[0, 1, 2, 3, 4]};

describe(`Fn00 returns the Rclss Identity of an Element of a Set `, () => {
    describe(`Fn00 has params: CurrentRclssBoundsDict && elem params`, () => {
        it(`should be a function of length 4`, () => {
            expect(Fn00).to.be.a('function').with.lengthOf(4);
        });
        it(`partialed it should  to be function of length 3`, () => {
            expect(Fn00(currBounds)).to.be.a('function').with.lengthOf(3);
        });
        it(`partialed more it should  to be function of length 1`, () => {
            expect(Fn00(currBounds)('', R.__, [])).to.be.a('function').with.lengthOf(1);
        });

    });

    let thisID = Fn00(currBounds)(elArg.el, R.__, elArg.lst);
    describe(`thisID is a partial invoked  Fn00(currBounds, elArg.el, R.__, elArg.lst) `, () => {
        it(` invoked it should return an Rclss name`, () => {
            expect(thisID(0)).to.equal('pst');
            expect(thisID(1)).to.equal('pst');
            expect(thisID(2)).to.equal('cur');
            expect(thisID(3)).to.equal('cur');
            expect(thisID(4)).to.equal('fut');
        });
    });
    describe(`Begin testsd against border and error input `, () => {
        it(` 
        Test: thisID invoked with elemNdx < elemList.length and > elemList.length; 
        The returned names are valid. 
        BUT are they HARMFULL when passes on to the next Fn? 
        OR will they ever be used?
        The input elemList WILL ALWAYS = 0 OR greater untill it's length`, () => {
            expect(thisID(-11)).to.equal('pst');
            expect(thisID(-1)).to.equal('pst');
            // expect(thisID(0)).to.equal('pst');
            // expect(thisID(1)).to.equal('pst');
            // expect(thisID(2)).to.equal('cur');
            // expect(thisID(3)).to.equal('cur');
            // expect(thisID(4)).to.equal('fut');
            expect(thisID(elArg.lst.length)).to.equal('fut', 'Even though list.length as an index is beyond the range of the list.');
            expect(thisID(10)).to.equal('fut');
        });
    });
});

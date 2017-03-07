/**
 *
 */
"use strict";

let R = require('ramda');
let compose = R.compose;
let curry = R.curry;

// let mocha = require('mocha');
// let describe = mocha.describe;
// let context = mocha.describe;
// let it = mocha.it;

let chai = require('chai'),
    should = chai.should,
    expect = chai.expect;


let Fn01 = curry((el, ndx, lst) => {
    // let dct = {beg: 2, lng: 2};
    return (ndx < dct.beg) ? 'pst' :
        ndx >= (dct.beg + dct.lng) ? 'fut' :
            'cur'
});
let Fn00 = curry((dct, el, ndx, lst) => {
    return (ndx < dct.beg) ? 'pst' :
        ndx >= (dct.beg + dct.lng) ? 'fut' :
            'cur'
});

describe(`Fn01 returns the Rclss Identity of an Element of a Set `, () => {
    describe(`Fn01 is a function `, () => {
        it(`expect a function of length 3.`, () => {
            expect(Fn01).to.be.a('function').with.lengthOf(3);
        });
    });
    describe(`Fn02 a partially invoked Fn01 is still a function but now of length 1..`, () => {
        let Fn02 = Fn01({}, 2);
        it(`expect Fn02 = Fn01({}, 2)`, () => {
            expect(Fn02).to.be.a('function').with.lengthOf(1);
        });
    });
    describe(`Fn0 partialed with a Dictionary is now Fn01`, () => {
        let DefCurr = {beg:2, lng:2};
        let cut = Fn00(DefCurr);
        it(`expect Fn00({}} to ret`, () => {
            expect(cut).to.be.a('function').with.lengthOf(3);
        });
    });
});
/**
 *  weightThisRclss_Test.js
 */
"use strict";

let R = require('ramda');
// let compose = R.compose;
let curry = R.curry;

let chai = require('chai'),
    should = chai.should,
    expect = chai.expect;

// TEST DATA
let WeightBounds = {
    pst: {beg: '3', end: '9'},
    cur: {beg: '10', end: '10'},
    fut: {beg: '9', end: '2'}
}

// let currBounds = {beg: 2, lng: 2};
// let elArg = {el: '', ndx: 0, lst: [0, 1, 2, 3, 4]};

describe(`Over View: this Fn is a part of pipe that 
    selectsThisElem_Rclss, createsThisElem_Weight, weights_TheElemAttributes.`, () => {
    describe(`This createThisElem_Weight will need Fns to ->
        retrieve ThisElemThisRclss_ThisWeightBounds, calcItsWt and return it `, () => {
        describe(`1st: RclssWeightBoundsFn [pasVoice] OR retrieve_WeightBoundsFn[actVoice]:: WeightBounds -> rcss_name -> rclss_wtbounds.
            activeVoice: retrieveRclssWeightBoundsFn =  DCT -> STR -> DCT.
            passiveVoice: RclssWeightBoundsFn`
            , () => {
                let Fn0 = (dct, name) => R.prop(R.__, dct); //  DICT -> STR -> DICT

                it(`should hhbe a function of len 2`, () => {
                    expect(Fn0).to.be.a('function').with.lengthOf(2);
                });
                it(`partially invoked it should be a function of len 1`, () => {
                    expect(Fn0(WeightBounds)).to.be.a('function').with.lengthOf(1);
                });

                it(`should ret the correct Rclss Weight Bounds Dict`, () => {
                    expect(Fn0(WeightBounds)('fut')).to.deep.equal({beg: '9', end: '2'});
                });
                it(`should return "undefined" if no bounds with that name..
             TODO so how handle an "undefined"`, () => {
                    expect(Fn0('wrongName')(WeightBounds)).to.deep.equal(undefined);
                });
            });
        xit(`should be a function of length 4`, () => {
            expect(thisID).to.be.a('function').with.lengthOf(4);
        });
        xit(`partialed it should  to be function of length 3`, () => {
            expect(thisID(currBounds)).to.be.a('function').with.lengthOf(3);
        });
        xit(`partialed more it should  to be function of length 1`, () => {
            expect(thisID(currBounds)('', R.__, [])).to.be.a('function').with.lengthOf(1);
        });

    });
    // xdescribe(`This uses the Fn00 w/length:4 version: DCT-> a -> N -> LST -> STR t) `, () => {
    //     let cut;
    //     beforeEach(() => {
    //         cut = thisID(currBounds)('', R.__, []);
    //     });
    //     it(` invoked it should return an Rclss name`,
    //         () => {
    //             expect(cut(0)).to.equal('pst');
    //             expect(cut(1)).to.equal('pst');
    //             expect(cut(2)).to.equal('cur');
    //             expect(cut(3)).to.equal('cur');
    //             expect(cut(4)).to.equal('fut');
    //         });
    // });
    // xdescribe(`This uses the Fn01 w/length:3 version: DCT-> a -> LST -> STR `, () => {
    //     let cut1;
    //     beforeEach(() => {
    //         cut1 = thisID1(currBounds)('', []);
    //     });
    //     it(`
    //     Test: thisID invoked with elemNdx < elemList.length and > elemList.length;
    //     The returned names are valid.
    //     BUT are they HARMFUL when passes on to the next Fn?
    //     OR will they ever be used?
    //     The input elemList WILL ALWAYS = 0 OR greater until it's length`, () => {
    //         expect(cut1(-11)).to.equal('pst');
    //         expect(cut1(-1)).to.equal('pst');
    //         expect(cut1(0)).to.equal('pst');
    //         expect(cut1(1)).to.equal('pst');
    //         expect(cut1(2)).to.equal('cur');
    //         expect(cut1(3)).to.equal('cur');
    //         expect(cut1(4)).to.equal('fut');
    //         expect(cut1(elArg.lst.length)).to.equal('fut', 'Even though list.length as an index is beyond the range of the list.');
    //         expect(cut1(10)).to.equal('fut');
    //     });
    // });
});

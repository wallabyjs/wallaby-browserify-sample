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
});

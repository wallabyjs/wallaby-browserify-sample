/**
 *  lets name this module. identityRclss OR IdentityOfRclss OR idRclss
 */
"use strict";

let R = require('ramda');
// let compose = R.compose;
let curry = R.curry;

let chai = require('chai'),
//     should = chai.should,
    expect = chai.expect;

let Fn00 = curry(
    /**
     *  ..... Fn00:: DCT->EL->N->LST -> STR
     * @param dct
     * @param el
     * @param ndx
     * @param lst
     * @return {string}
     *
     * ACT: Fn returns a RclssName when applied with params;
     * PAS: an RclssName is returned when Fn is applied with params
     */
    (dct, el, ndx, lst) => {
        return (ndx < dct.beg) ? 'pst' :
            ndx >= (dct.beg + dct.lng) ? 'fut' :
                'cur'
    });

let Fn01 = curry(
    /**
     *  ..... Fn01:: ((DCT,EL,__,LST) -> N) -> STR
     * @param currBounds
     * @param el
     * @param el_ndx
     * @param el_lst
     *
     * ACT: Fn returns a CURRIED, PARTIAL FnXX applied with params: currBounds, el, __, el_lst
     * the returned FnXX returns a RclssName when applied to param:el_ndx
     * PAS: a partialed FnXX is returned when params:currBounds, el, __, and el_lst are applied.
     * an RclssName is returned when FnXX is applied to el_ndx
     */
    (currBounds, el, el_ndx, el_lst) => Fn00(currBounds)(el, R.__, el_lst));//

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
    describe(`Fn01 is a partialed Fn00(currBounds, elArg.el, R.__, elArg.lst) `, () => {
        let Fn01 = Fn00(currBounds)(elArg.el, R.__, elArg.lst);
        // FnXX = Fn00(currBounds)(elArg.el, R.__, elArg.lst);
        it(` invoked it should return an Rclss name`, () => {
            expect(Fn01(0)).to.equal('pst');
            expect(Fn01(1)).to.equal('pst');
            expect(Fn01(2)).to.equal('cur');
            expect(Fn01(3)).to.equal('cur');
            expect(Fn01(4)).to.equal('fut');
        });
    });
    describe(`TODO Fn00 should be tested against border and error input `, () => {
        //TODO Fn00 should be tested against border and error input
        let Fn01 = Fn00(currBounds)(elArg.el, R.__, elArg.lst);
        xit(` invoked it should either show fail or not fail because of modified Fn00`, () => {
            expect(Fn01(0)).to.equal('pst');
            expect(Fn01(1)).to.equal('pst');
            expect(Fn01(2)).to.equal('cur');
            expect(Fn01(3)).to.equal('cur');
            expect(Fn01(4)).to.equal('fut');
        });
    });
});

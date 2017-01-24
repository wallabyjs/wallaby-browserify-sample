/**
 * Created by CLIF on 1/19/2017.
 */
"use strict";

let R = require('ramda');
let compose = R.compose;

let mocha = require('mocha');
let describe = mocha.describe;
let it = mocha.it;
//
let chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

// let roundToTwoPlaces = require('../h/roundToTwoPlaces');

let weight_aReadClss_Elem; // S->L->N -> N
weight_aReadClss_Elem = require('../src/weight_aReadClss_Elem');

let _formatOpacity; // a -> STR
_formatOpacity = require('../src/format_anElem_Style')._formatOpacity;

let _style_anElem;// N -> STR
_style_anElem = R.curry(
    () => {
});
// _style_anElem = require('../src/style_anElem');

describe(`_style_anElem:: STR,ELEM,LST,NUM -> ELEM`, ()=>{
    /**
     * mutate an ELEM's style object.
     * first get an elems style object: style =
     * next CSD.setProperty: e.g. ('color, 'red')
     */
    let chptSpns, aSpan, anElem, aStyle;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        chptSpns = document.querySelectorAll(".chptr span");
        anElem = R.nth(0)(chptSpns);
        aStyle = anElem.style;

    });
        //test data
    let Elem_styleProps = {opacity: '1', fontSize: '100%'};
    let clssLimitsStr = 'pst';
    let elemNdx = 0;
    let elemLst = ['a', 'b'];
        // tests
    describe(`an Elem has a style object: a CSD.`, ()=>{
        it(`should exist and be an object`, () => {
            aStyle.should.exist.and.be.a('Object');
        });
        it(`should be settable`, ()=>{
            aStyle.setProperty("color", 'red');
            aStyle.getPropertyValue("color").should.equal('red');
        });
    });
});

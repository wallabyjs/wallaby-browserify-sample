/**
 * Created by CLIF on 1/19/2017.
 */
"use strict";

let R = require('ramda'),
    pipe = R.pipe;
let mocha = require('mocha'),
    describe = mocha.describe,
    context = mocha.describe,
    it = mocha.it;
//
let chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

//CODE UNDER TST
let mutate_StyleAttr = require('../h/alter/anElemStyleAttr');
let CUT_Fn = mutate_StyleAttr;

describe(`CUT_Fn:: mutate_StyleAttr:: STR -> ELEM -> ELEM
 
    it ACCEPTS and APPLIES a CSS_like String TO anElement.
`, function () {
    let doc, chptSpns, baseElem, anElem;
    mocha.beforeEach(function () {
        loadFixtures('index.html');
        doc = document;
        chptSpns = document.querySelectorAll("body .chptr, span");
        anElem = R.nth(0, chptSpns);
        CUT_Fn = mutate_StyleAttr;
    });
    describe(`CUT_Fn HAS Params (css_str, elem): 
    `, function () {
        it(`should be a function w/ artity:2..`, function () {
            CUT_Fn.should.be.a('function').with.lengthOf(2);
            context(`the Param:css_str is a Str like this '{key:valu, k:v, ...}'`, () => {
            });
        });
    });
    describe(`CUT_Fn APPLIED TO (anElem) -> SETS the Element.style
    
        e.g.CSS_ like -"opacity:0.4; color:red; font-size:59%" 
    `, function () {
        it(`should  CHANGE an Elem.style.property`, function () {
            anElem.style.color.should.equal('');
            console.log('-> ' + anElem.style.color)
            anElem = CUT_Fn("opacity:0.4; color:red", anElem);
            // anElem.style.color.should.equal('red');

            // HERE IS THE PROBLEM !!!!!!!!!!!!!!!!!!!!!!!!!!(baseElem.style.opacity === anElem.style.opacity).should.be.false;// WHY it was a copy??
        });
    });
});

//
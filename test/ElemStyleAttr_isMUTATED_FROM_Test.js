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
let setStyleAttr = require('../src/ElemStyleAttr_isMUTATED_FROM');
let CUT_Fn = setStyleAttr;

describe(`setStyleElem IS the CodeUnderTest [CUT_Fn]: 
    it mutates the Element it is applied to. CUT_Fn:: STR -> ELEM -> ELEM
`, function () {
    let doc, chptSpns, baseElem, anElem;
    mocha.beforeEach(function () {
        loadFixtures('index.html');
        doc = document;
        chptSpns = document.querySelectorAll("body .chptr, span");
        anElem = R.nth(0, chptSpns);
        CUT_Fn = setStyleAttr;
    });
    context(`The CUT_Fn HAS Params (CssStr, Elem): 
    `, function () {
        it(`should be a function w/ artity:2..`, function () {
            CUT_Fn.should.be.a('function').with.lengthOf(2);
        });
    });
    context(`The CUT_Fn( WITH a CSS_ like Str param: '{key:valu, k:v, ...}, 
        APPLIED TO (anElem) -> MUTATES -> that Element
        e.g.CSS_ like -"opacity:0.4; color:red; font-size:59%" 
    `, function () {
        it(`should  ............. aome thing about default styles`, function () {
            expect(chptSpns).to.exist;
            anElem.style.opacity.should.equal('');
            anElem.style.color.should.equal('');
            //
            anElem = CUT_Fn("opacity:0.4; color:red", anElem);
            anElem.style.color.should.equal('red');
            anElem.style.opacity.should.equal('0.4');

            // HERE IS THE PROBLEM !!!!!!!!!!!!!!!!!!!!!!!!!!(baseElem.style.opacity === anElem.style.opacity).should.be.false;// WHY it was a copy??
        });
        xit(`should MUTATE a style.property after the CUT_Fn IS APPLIED`, function () {
            anElem = R.clone(baseElem);
            baseElem.should.exist;
            baseElem.style.shouldExist;
            baseElem.style.getAttribute('opacity').should.be.a('undefined');
        });
        xit(`should NOT MUTATE a style.property THAT IS NOT IN the CSS Param.`, function () {
            (baseElem.style.opacity).should.equal(''); // BEFORE applying CUT_Fn
            (baseElem.style.color).should.equal(''); // BEFORE applying CUT_Fn

            (CUT_Fn("color:red", anElem).style.opacity ).should.equal('');
            (anElem.style.opacity).should.equal('');
            (anElem.style.opacity).should.equal('red');

        });
    });
});


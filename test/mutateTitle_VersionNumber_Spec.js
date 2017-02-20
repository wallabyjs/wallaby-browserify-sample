/**
 *  * I like this declarative set of tests 2/20/2017
 * Created by CLIF on 1/29/2017.
 */
"use strict";
let R = require('ramda'),
    compose = R.compose;

let mocha = require('mocha'),
    describe = mocha.describe,
    it = mocha.it;

let chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

//********************************
let mutateTitle_VersionNumber = require('../src/mutateTitle_VersionNumber');
const VersionDct = require('../data/VersionDct');

describe(`the fn: mutateTitle_VersionNumber:: Doc -> Doc `, ()=>{
    let doc, dct, fn;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        doc = document;
        dct = require('../data/VersionDct');
        fn = mutateTitle_VersionNumber;
        fn(doc);
    });
    it(`should be a function.`, () => {
        (fn).should.be.a('function');
    });
    it(`should return a document object.`, () => {
        doc.should.be.a('object').equal(doc)        ;
    });
    it(`should always return a title including 'wbSample ver:`, () => {
        R.prop('title',doc).should.include('wbSample ver:');
    });
    it(`should return a title value '1_2_3' retrieved from modifying ../data/VersionDct'`, ()=>{
        dct.version = '1_2_3';
        mutateTitle_VersionNumber(doc);
        R.prop('title',doc).should.include('1_2_3');
    });
});






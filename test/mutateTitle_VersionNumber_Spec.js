/**
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

describe(`mutateTitle_VersionNumber:: Doc -> Doc `, ()=>{
    let doc, dct;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        doc = document;
        dct = require('../data/VersionDct');

    });
    it(`should reset the <title> to include the data/VersionDct.version: value.`, ()=>{
        dct.version = '1_2_3';
        mutateTitle_VersionNumber(doc);
        doc.querySelector('title').innerHTML.should.equal('wbSample ver: ' + '1_2_3');
    });
});






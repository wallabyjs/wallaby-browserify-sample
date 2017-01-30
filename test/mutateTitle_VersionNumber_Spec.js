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
let setVersion = require('../src/mutateTitle_VersionNumber');

describe(`setVersion:: Doc -> Doc `, ()=>{
    let dom;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        dom = document;
    });
    it(`should reset the <title> w/ a version number.`, ()=>{
        setVersion(dom);
        dom.querySelector('title').innerHTML.should.equal('wbSample ver: 0.0.3');
    })
});






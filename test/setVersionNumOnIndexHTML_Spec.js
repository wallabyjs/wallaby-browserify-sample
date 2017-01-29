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
let setVersionOnIndex = require('../src/setVersionNumOnIndexHTML');

describe(`setVersionOnIndex:: Dom -> Str -> Dom `, ()=>{
    let dom;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        dom = document;
    });
    it(`should reset the <title> w/ a version number.`, ()=>{
        setVersionOnIndex('0.0.2')(dom);
        dom.querySelector('title').innerHTML.should.equal('version 0.0.2');
    })
});




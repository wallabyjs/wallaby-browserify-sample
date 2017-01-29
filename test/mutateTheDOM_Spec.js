/**
 * Created by CLIF on 1/28/2017.
 */
"use strict";
let R = require('ramda');
let compose = R.compose;

let mocha = require('mocha');
let describe = mocha.describe;
let it = mocha.it;

let chai = require('chai'),
    expect = chai.expect,
    should =  chai.should();

let _mutate = require('../src/mutateTheDOM');

describe("_mutate:: Dom -> Dom.", function () {
    let dom, anElem;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        dom = document;
        anElem = dom.querySelector('#theFirst');
    });
    xit("should mutate the DOM.", function () {
        _mutate(dom);
        anElem.style.color.should.equal('green');
        anElem.style.opacity.should.equal('0.4');
    });

});




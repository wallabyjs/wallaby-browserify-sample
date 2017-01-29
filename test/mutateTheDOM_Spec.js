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

describe("_mutate:: Doc -> Doc.", function () {
    let dom;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        dom = document;
    });
    it("should mutate the DOM and return it.", function () {
        _mutate(dom);
        dom.querySelector('#theFirst').style.color.should.equal('red');
    });
    xit("should mutate the DOM and return it.", function () {
        _mutate(dom);
    });
});




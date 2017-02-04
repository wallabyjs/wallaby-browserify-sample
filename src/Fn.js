"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;
let mocha = require('mocha'),
    describe = mocha.describe,
    it = mocha.it;
let chai = require('chai'),
    should = chai.should();
// ***************************

let elem;
let styleThisElem = curry((csd, elem) => {
    mocha.beforeEach(() => {
        elem = {style: {background: 'blue'}};
    });
    describe(`here is base element.`, () => {
        it(`should return elem.style.background`, () => {
            elem.style.background.should.equal('blue');
        });
    });
});

styleThisElem({'color': 'red'}, elem);

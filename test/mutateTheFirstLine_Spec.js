/**
 * Created by CLIF on 1/28/2017.
 */
"use strict";
let R = require('ramda');
let mocha = require('mocha'),
    describe = mocha.describe,
    it = mocha.it;
let chai = require('chai'),
    should =  chai.should();
let _mutate = require('../src/mutateTheFirstLine');

describe("mutateElemStyleProp:: Dom -> Dom.", function () {
    let dom, anElem;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        dom = document;
    });
    it("should mutate the DOM.", function () {
        let anElem = dom.querySelector('#theFirst');
        // BEFORE: hard code anElem
        anElem.style.backgroundColor = 'pink';
        anElem.style.opacity = '0.99';
        anElem.style.color = 'red';
         _mutate(dom);
        anElem.style.color.should.equal('green');
        anElem.style.opacity.should.equal('0.4');
        anElem.style.fontSize.should.equal('60%');
        // anElem.style.background.should.equal('rgb(255, 192, 203)');
    });

});




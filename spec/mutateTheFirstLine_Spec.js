/*
 *  * I like this declarative set of tests:: 2/20/17
 */
"use strict";
let R = require('ramda');
let mocha = require('mocha'),    describe = mocha.describe,    it = mocha.it;
let chai = require('chai'),     should =  chai.should();

let _mutate;
_mutate = require('../src/setStyleAttr');//    STR->ELM->ELM

describe(`mutateElemStyleProp:: Dom -> Dom.
Is a hardCoded test stub to use with other stubs in mutateTheDOM.js`, function () {
    let dom;
    mocha.beforeEach(function  () {
        loadFixtures('index.html');
        dom = document;
    });

    it(`should mutate the DOM, at least some elements of the DOM`, function () {
        let anyElem = dom.querySelector('#theFirst');
        // BEFORE: anyElem defaults
        anyElem.style.backgroundColor.should.equal('');
        anyElem.style.color.should.equal('');
         _mutate("opacity:0.4; color:red; font-size:60%", anyElem);
         // AFTER _mutate
        anyElem.style.backgroundColor.should.equal('');  // unchanged
        anyElem.style.color.should.equal('red');         // changed
        anyElem.style.opacity.should.equal('0.4');
        anyElem.style.fontSize.should.equal('60%');
    });

});
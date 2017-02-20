/**
 * I like this declarative set of tests
 */
"use strict";
let R = require('ramda');
let mocha = require('mocha'),
    describe = mocha.describe,
    it = mocha.it;
let chai = require('chai'),
    should =  chai.should();

let mutateTheDom = require('../src/mutateTheDOM');

describe(`mutateTheDOM:: (Fn -> Dom) -> Dom. 
    It composes functions to mutate internal elements of the an HTML document.
    CURRENTLY it a hardCoded test stub.`, function () {
    let _mutate, dom, dom1,  anElem;
    mocha.beforeEach(function  () {
        loadFixtures('index.html');
        dom = document;
        _mutate = mutateTheDom;
    });

    it(`should be a function..`, () => {
        _mutate.should.be.a('function');
    });

    it(`should affect the document/dom object but still be the orig dom object..
    it is not clear what this test.
        apparently the document object is the same event though internally some elements have changed.`
        , function () {
        dom.should.equal(document);
        dom1 = _mutate(dom);
        dom1.should.equal(document);
    });

    it(`should mutate at least some elements of the DOM.
    in this test there are two stub mutate_ functions:
        mutateTheFirstLine() and mutateTitle_VersionNumber.`, function () {
        let anElem = dom.querySelector('#theFirst');
        // BEFORE: anElem defaults
        anElem.style.backgroundColor.should.equal('');
        anElem.style.color.should.equal('');
        _mutate(dom);
        // AFTER _mutate
        anElem.style.backgroundColor.should.equal('');  // unchanged
        anElem.style.color.should.equal('red');         // changed
        anElem.style.opacity.should.equal('0.4');
        anElem.style.fontSize.should.equal('60%');
    });
});





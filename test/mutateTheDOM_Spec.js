/**
 * I like this declarative set of tests:: 2/20/17
 */
"use strict";
let R = require('ramda');
let mocha = require('mocha'),
    describe = mocha.describe,
    it = mocha.it;
let chai = require('chai'),
    should =  chai.should();

let mutateTheDom = require('../src/mutateTheDOM');//STR->ELEM->ELEM

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

    xit(`should affect the document/dom object but still be the orig dom object..
        it is not clear what this test.
        apparently the document object is the same event though internally some elements have changed.`
        , function () {
        dom.should.equal(document);
        dom1 = _mutate(dom);
        dom1.should.equal(document);
    });

    it(`should invoke mutateTheFirstLine() and see firstLine style changes.`, function () {
        let anElem = dom.querySelector('#theFirst');
        // BEFORE: anElem defaults
        let bC = anElem.style.backgroundColor;
        bC.should.equal('');
        let c = anElem.style.color;
        c.should.equal('');
        c = _mutate(dom);
        // AFTER _mutate
        anElem.style.backgroundColor.should.deep.equal(bC);  // unchanged
        anElem.style.color.should.not.deep.equal(c);         // changed
    });
    it(`should invoke mutateTitle_VersionNumber() see a .`, function () {
        let anElem = dom.querySelector('#theFirst');
    });
});





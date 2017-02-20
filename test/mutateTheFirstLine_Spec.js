/*
 *  * I like this declarative set of tests:: 2/20/17
 */
"use strict";
let R = require('ramda');
let mocha = require('mocha'),
    describe = mocha.describe,
    it = mocha.it;
let chai = require('chai'),
    should =  chai.should();

let _mutate = require('../src/mutateTheFirstLine');

describe(`mutateElemStyleProp:: Dom -> Dom.
Is a hardCoded test stub to use with other stubs in mutateTheDOM.js`, function () {
    let dom, dom1,  anElem;
    mocha.beforeEach(function  () {
        loadFixtures('index.html');
        dom = document;
    });

    it(`should return the document object.
    it is not clear what this test.
        apparently the document object is the same event though internally some elements have changed.`, () => {
        dom.should.equal(document);
        dom1 = _mutate(dom);
        dom1.should.equal(document);
    });

    it(`should mutate the DOM, at least some elements of the DOM`, function () {
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




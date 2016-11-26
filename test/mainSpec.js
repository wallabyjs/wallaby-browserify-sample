"use strict";

let mocha = require('mocha');
let describe = mocha.describe;
let it = mocha.it;
let beforeEach = mocha.beforeEach;
let before = mocha.before;
let chai = require('chai');
let should = chai.should();
// let be = chai.be;

let _ = require('ramda');
let compose = _.compose;
let curry = _.curry;
//---------------------------
let isNodeList = require('../h/isNodeList');
// TEST CODE --------------------------------
let _slctSpan_byNdx = curry(function (span_ndx) {
    return _.nth(span_ndx)
});// (N) -> L -> D
let _stylePropName = _.prop('style');
let _setStylPropLens = _.lensProp;// S -> Lens
let _aStylDct = _.prop('style'); // D -> D.style
let _viewStylProp = curry(function (prop_str, a_dct) {
    return _.view(_setStylPropLens(prop_str), _aStylDct(a_dct))
}); // (S -> Lens) -> D -> S
let _setStylPropValue = function (val) {
    // TODO this will evole to N.ndx -> N.wt
    return val
}; // val -> val
let _setStylProp = curry(function (prop_str, val_str, a_dct) {
    return _.set(_setStylPropLens(prop_str), _setStylPropValue(val_str), _aStylDct(a_dct))
});// S _> N -> D


// TESTS ----------------------------
describe("mutating Styles/", function () {
    describe("access div.chptr spans in index.html/", function () {
        let chptSpns, span, spanStyle, _fontSizeLens, _fontSizeStyleLens;
        beforeEach(function defineObjOfInterest() {
            loadFixtures('index.html');
            chptSpns = document.querySelectorAll(".chptr span");
            span = _.nth(1)(chptSpns);
            spanStyle = span.style;
            _fontSizeLens = _.lensProp('fontSize');
        });
        describe('chptSpns/', function () {
            it('should exist', function () {
                chptSpns.should.exist;
            });
            it('should be node list', function () {
                isNodeList(chptSpns).should.be.true;
            });
            it('should have some children.', function () {
                chptSpns.length.should.be.greaterThan(0);
            });
            it('should have a firstChild.', function () {
                chptSpns[0].should.exist;
            });
            it('should have some innerHTML.', function () {
                let someHTML = compose(
                    _.slice(1, 8),
                    _.prop('innerHTML'),
                    _.head
                );
                someHTML(chptSpns).should.equal("  1 And");
            });
        });
        describe("a Span/", function () {
            it('should have some innerHTML.', function () {
                let someHTML = compose(
                    _.slice(1, 8),
                    _.prop('innerHTML'),
                    _.head
                );
                someHTML(chptSpns).should.equal("  1 And");
            });
            it("should have empty style.fontSize", function () {
                span.style.fontSize.should.be.equal('');
            });
        });
        describe("fontSize/", function () {
            let fontSize;
            beforeEach(function resetFontSize() {
                fontSize = _.view(_fontSizeLens, spanStyle)
            });
            it("should exist.", function () {
                fontSize.should.exist;
            });
            it("should be empty.", function () {
                fontSize.should.equal((''));
            });
            it("should be mutated.", function () {
                let new_spanStyl = _.set(_fontSizeLens, "50%", spanStyle);
                console.log("new_spanStyl:" + new_spanStyl.fontSize);
                new_spanStyl.fontSize.should.equal(('50%'));
            });
        });
    });

    describe(" see a span styleProp/", function () {
        let chptSpns;
        beforeEach(function get_chptSpns() {
            loadFixtures('index.html');
            chptSpns = document.querySelectorAll(".chptr span");
        });
        describe("use a Span using slctSpan_byNdx(0)/", function () {
            let aSpan, aNdx, aNL, aStylProp;
            beforeEach(function resetFontSize() {
                chptSpns = document.querySelectorAll(".chptr span");
                aSpan = _slctSpan_byNdx(0)(chptSpns);
            });
            it("a Span should exist/", function () {
                aSpan.should.exist;
            });
            it("should NOT be empty/", function () {
                aSpan.should.not.equal((''));
            });
        });
        describe("view || set a Span.style using lens/", function () {
            let aSpan, lens, styleProp, spanStyl;
            beforeEach(function resetFontSize() {
                chptSpns = document.querySelectorAll(".chptr span");
                aSpan = _slctSpan_byNdx(0)(chptSpns);
                lens = _setStylPropLens('fontSize');
                spanStyl = _aStylDct(aSpan);
                styleProp = _viewStylProp('fontSize', aSpan)
            });
            it("build a lens using _setStylPropLens(_stylePropName('fontSize'))", function () {
                lens.should.exist;
            });
            it("span style dict should have a fontSize attribute: using _aStylDct(D)", function () {
                _aStylDct(aSpan).fontSize.should.exist;
            });
            it("span style fontSize should be empty: using _viewStylProp(S,D)", function () {
                styleProp.should.equal('');
            });
            it("should be mutated using _setStylProp(S,N,D).", function () {
                let new_spanStyl = _setStylProp('fontSize', "50%", aSpan);
                console.log("new_spanStyl:" + new_spanStyl.fontSize);
                new_spanStyl.fontSize.should.equal(('50%'));
            });
        });
    });
});
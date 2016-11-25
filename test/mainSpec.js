"use strict";

var chai = require('chai');
var should = chai.should();
var _ = require('ramda');
var compose = _.compose;
var curry = _.curry;
//---------------------------
var isNodeList = require('../src/isNodeList');

var _slctSpanNdx = curry(function (span_ndx) {
    return _.nth(span_ndx)});
    var stylePropName = _.prop('style');
    var _setStylePropValue = function (ndx) {
        return ndx * 0.1
    }; // N:ndx -> N:wt
    var _setStylePropLens = function (prop_name) {
        return _.lensProp(prop_name)
    };
    var _setStyleProp = _.compose(_.set, _setStylePropValue, _setStylePropLens); // D:styleD ->
    var _setStyle = curry(
        function (styl_prop_name, span_ndx, chpts) {
            return _setStyleProp(styl_prop_name);
        });

// TESTS
    describe("mutating Styles", function () {
        describe(" index.html.", function () {
            var chpts, span, spanStyle, _fontSizeLens, _fontSizeStyleLens;
            beforeEach(function defineObjOfInterest() {
                loadFixtures('index.html');
                chpts = document.querySelectorAll(".chptr span");
                span = _.nth(1)(chpts);
                spanStyle = span.style;
                _fontSizeLens = _.lensProp('fontSize');
            });
            describe('chpts.', function () {
                it('should exist', function () {
                    chpts.should.exist;
                });
                it('should be node list', function () {
                    isNodeList(chpts).should.be.true;
                });
                it('should have some children.', function () {
                    chpts.length.should.be.greaterThan(0);
                });
                it('should have a firstChild.', function () {
                    chpts[0].should.exist;
                });
                it('should have some innerHTML.', function () {
                    var someHTML = _.compose(
                        _.slice(1, 8),
                        _.prop('innerHTML'),
                        _.head
                    );
                    someHTML(chpts).should.equal("  1 And");
                });
            });
            describe("a Span.", function () {
                it('should have some innerHTML.', function () {
                    var someHTML = _.compose(
                        _.slice(1, 8),
                        _.prop('innerHTML'),
                        _.head
                    );
                    someHTML(chpts).should.equal("  1 And");
                });
                it("should have empty style.fontSize", function () {
                    span.style.fontSize.should.be.equal('');
                });
            });
            describe("fontSize.", function () {
                var fontSize;
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
                    var new_spanStyle = _.set(_fontSizeLens, "50%", spanStyle);
                    console.log("new_spanStyle:" + new_spanStyle.fontSize);
                    new_spanStyle.fontSize.should.equal(('50%'));
                });
            });
        });

        describe(" _setStyle.", function () {
            var chpts, _CUT, CUT;
            beforeEach(function () {
                loadFixtures('index.html');
                chpts = document.querySelectorAll(".chptr span");
                CUT = _setStyle('fontSize')(0)(chpts);
                //TODO FIX CUT is not an element it style OBJ ?????
            });
            it("should exist", function () {
                CUT.should.exist;
            });
            it("should not be empty.", function () {
                (_.empty(CUT.should.not.equal(true)));
            });
            describe("fontSize.", function () {
                var fontSize;
                beforeEach(function resetFontSize() {
                    fontSize = CUT.style.fontSize;
                });
                it("should exist.", function () {
                    fontSize.should.exist;
                });
                // it("should be empty.", function () {
            //         fontSize.should.equal((''));
            //     });
            //     it("should be mutated.", function () {
            //         var new_spanStyle = _.set(_fontSizeLens, "50%", spanStyle);
            //         console.log("new_spanStyle:" + new_spanStyle.fontSize);
            //         new_spanStyle.fontSize.should.equal(('50%'));
            //     });
            });
        });
    });
"use strict";

var chai = require('chai');
var should = chai.should();
var _ = require('ramda');
var compose = _.compose;
var curry = _.curry;
//---------------------------
var isNodeList = require('../h/isNodeList');
// TEST CODE --------------------------------
var _slctSpanNdx = curry(function (span_ndx) {
    return _.nth(span_ndx)
});
var _stylePropName = _.prop('style');
var _setStylePropLens = function (prop_name) {
    return _.lensProp(prop_name)
};
var _setStylePropValue = function (ndx) {
    return ndx * 0.1
}; // N:ndx -> N:wt
var _setStyleProp = _.compose(_.set, _setStylePropValue, _setStylePropLens); // D:styleD ->
var _setStyle = curry(
    function (styl_prop_name, span_ndx, chptSpns) {
        return _setStyleProp(styl_prop_name);
    });

// TESTS ----------------------------
describe("mutating Styles", function () {
    describe("access div.chptr spans in index.html.", function () {
        var chptSpns, span, spanStyle, _fontSizeLens, _fontSizeStyleLens;
        beforeEach(function defineObjOfInterest() {
            loadFixtures('index.html');
            chptSpns = document.querySelectorAll(".chptr span");
            span = _.nth(1)(chptSpns);
            spanStyle = span.style;
            _fontSizeLens = _.lensProp('fontSize');
        });
        describe('chptSpns.', function () {
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
                var someHTML = _.compose(
                    _.slice(1, 8),
                    _.prop('innerHTML'),
                    _.head
                );
                someHTML(chptSpns).should.equal("  1 And");
            });
        });
        describe("a Span.", function () {
            it('should have some innerHTML.', function () {
                var someHTML = _.compose(
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

    describe(" see a styleProp", function () {
        var chptSpns, _CUT, CUT;
        beforeEach(function get_chptSpns () {
            loadFixtures('index.html');
            chptSpns = document.querySelectorAll(".chptr span");
        });
        describe("use a Span.", function () {
            var aSpan, aNdx, aNL, aStylProp;
            beforeEach(function resetFontSize() {
                chptSpns = document.querySelectorAll(".chptr span");
                // aSpan = _slctSpanNdx(chptSpns);
            });
            it("should exist.", function () {
                aSpan.should.exist;
            });
            // it("should be empty.", function () {
            //         aSpan.should.equal((''));
            //     });
            //     it("should be mutated.", function () {
            //         var new_spanStyle = _.set(_fontSizeLens, "50%", spanStyle);
            //         console.log("new_spanStyle:" + new_spanStyle.aSpan);
            //         new_spanStyle.aSpan.should.equal(('50%'));
            //     });
        });
    });
});
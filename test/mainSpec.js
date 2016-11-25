"use strict";

var chai = require('chai');
// var before = chai.before;
var should = chai.should();
var _ = require('ramda');
//---------------------------
var isNodeList = require('../src/isNodeList');

var chpts;
describe(" index.html.", function () {
    var chpts, span, spanStyle, _fontSizeLens, _fontSizeStyleLens;
    beforeEach(function defineObjOfInterest() {
        loadFixtures('index.html');
        chpts = document.querySelectorAll(".chptr span");
        span = chpts[0];
        spanStyle = span.style;
        _fontSizeLens = _.lensProp('fontSize');
        _fontSizeStyleLens = _.lensPath(['style', 'fontSize']);
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
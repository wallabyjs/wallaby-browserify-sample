var chai = require('chai');
var should = chai.should();
var _ = require('ramda');
//---------------------------
var isNodeList = require('../src/isNodeList');
// var chpts;
// chai.before(function () {
//     loadFixtures('index.html');
//     chpts = document.querySelectorAll(".chptr span");
// });
describe('chpts', function () {
    var chpts;
    beforeEach(function () {
        loadFixtures('index.html');
        chpts = document.querySelectorAll(".chptr span");
    });
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
describe("a Span", function () {
    var span;
    beforeEach(function () {
        loadFixtures('index.html');
        span = document.querySelectorAll(".chptr span")[0];
    });
    it("should exist.", function () {
        span.should.exist;
    });
    it("should have empty style.fontSize", function () {
        span.style.fontSize.should.be.equal('');
    });
});
describe("fontSize::span.style.fontSize", function () {
    var span, _fontSizeLens;
    beforeEach(function () {
        _fontSizeLens = _.lensPath(['style', 'fontSize']);
        loadFixtures('index.html');
        span = document.querySelectorAll(".chptr span")[0];

    });
    it("should exist.", function () {
        _.view(_fontSizeLens, span).should.exist;
    });
});
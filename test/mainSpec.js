var chai = require('chai');
// var expect = chai.expect;
var should = chai.should();
var _ = require('ramda');

function isNodeList(nodes) {
    var stringRepr = Object.prototype.toString.call(nodes);

    return typeof nodes === 'object' &&
        /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
        (typeof nodes.length === 'number') &&
        (nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0));
}

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

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
    it('should have children.', function () {
        chpts.length.should.equal(5);
    });
    it('should have a firstChild.', function () {
        chpts[0].should.exist;
    });
    it('should have abbreviated head.innerHTML.', function () {
        var TST = _.compose(
            _.slice(1, 8),
            _.prop('innerHTML'),
            _.head
        );
        TST(chpts).should.equal("  1 And");
    });
});

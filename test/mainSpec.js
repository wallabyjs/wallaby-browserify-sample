var chai = require('chai');
var should = chai.should();
var _ = require('ramda');
//---------------------------
var isNodeList = require('../src/isNodeList');
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
describe("..", function () {
    it("should ..", function () {
        true.should.be.true;
    });
});

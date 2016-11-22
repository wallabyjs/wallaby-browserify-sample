// "use strict";

var chai = require('chai');
var expect = chai.expect;

function isNodeList(nodes) {
    var stringRepr = Object.prototype.toString.call(nodes);

    return typeof nodes === 'object' &&
        /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
        (typeof nodes.length === 'number') &&
        (nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0));
}


var chpts = document.querySelectorAll(".chptr, span");
console.log("chpts:" + chpts);

describe('chpts', function () {
    it('should exist', function () {
        expect(chpts).to.exist;
    });

    it('should be node list', function () {
        expect(isNodeList(chpts)).true;
    });
    it('should have children. WHY DOES IT FAIL?? ', function () {
        expect(chpts.length).is.equal(5);
    });

});



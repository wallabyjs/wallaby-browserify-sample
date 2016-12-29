/**
 *SeeTextPatterns:: an Architecture view of an app to read and visually explore patterns in text.

 A User reads a text by stepping forward or back using keyBoard events.
 As the User reads - refocuses on the next, or the last, segment - the effect on the entire text is immediately SEEn_siz.

 The app visually displays the entire text
 but accentuates, in space and visual effects, the currently beingRead segment: the focus area.
 and diminish, in space and visual effects, the alreadyRead and tobeRead segments.

 A User Dashboard selects, composes and applies the visualEffects group.
 A User Dashboard selects, composes and applies a textFocuser with n_begin, granularity and scope.

 ****************************

 CODE DESIGn_siz: A series of functions to mutate HTML styles in real time.
 They can work by setting an element.class to a CSS property.
 They can work by setting an element.style CSD property
 They can work by setting an element value with a canned function: e.g.  linear gradient.

 */
"use strict";
// REQUIRES
let mocha = require('mocha');
let describe = mocha.describe;
let it = mocha.it;
let beforeEach = mocha.beforeEach;
let before = mocha.before;
let only = mocha.only;
// let skip = mocha.skip; // n_sizOTE:this does not work as it.skip(...-> undefined is not a constructor (evaluating 'it.skip').
// let skipped = mocha.skipped; // n_sizOTE:this does not work as it.skipped(....
let chai = require('chai');
let should = chai.should();
let expect = chai.expect;
// let be = chai.be;

let _ = require('ramda');
let compose = _.compose;
let curry = _.curry;

let LGG = require('../src/linearGradientEffect');

describe("SeeTextPatterns:: make a linearGradientEffect for some CSD properties, CSS gradients for text are ponderous.", function () {
    describe("try#1::LinearGradientGenerator a.k.a weighter) -> lst", function () {
        let chptSpns;
        beforeEach(() => {
            loadFixtures('index.html');
            chptSpns = document.querySelectorAll(".chptr span");
        });
        describe("LGG:for n: 0 to n_siz, LGG(n_beg, n_end, n_siz) -> n_weight", function () {
            it("should be (n_beg, n_end, n_siz)(n_ndx) -> n_wt", function () {
                LGG(10, 90, 4)(0).should.equal(10);
                LGG(10, 90, 4)(2).should.equal(50);
                LGG(-10, 90, 4)(0).should.equal(-10);
                LGG(-10, 90, 4)(4).should.equal(90);
                LGG(0, 3, 1)(0).should.equal(0);
                LGG(0, 3, 1)(1).should.equal(3);
            });
        });
    });
});

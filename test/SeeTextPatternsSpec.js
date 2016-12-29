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

/**
 *  * describe("LGG:for ndx: 0 to ndx_max, LGG(wt_beg, wt_end, ndx_max, ndx) -> wt_value"
 * LGG = (wt_beg, wt_end, ndx_max) => ndx => wt_beg + n/ndx_max * (wt_end-wt_beg);
 */
let LGG = require('../src/linearGradientEffect');

describe("SeeTextPatterns:: make a linearGradientEffect for some CSD properties, CSS gradients for text are ponderous.", function () {
    describe("LinearGradientGenerator a.k.a weighter) -> lst", function () {
        let chptSpns;
        beforeEach(() => {
            loadFixtures('index.html');
            chptSpns = document.querySelectorAll(".chptr span");
        });
        describe("LGG = (wt_beg, wt_end, ndx_max) => ndx => wt_beg + n/ndx_max * (wt_end-wt_beg);", function () {
            it("should be (wt_beg, wt_end, ndx_max)(ndx) -> wt", function () {
                LGG(10, 90, 4)(0).should.equal(10);
                LGG(10, 90, 4)(2).should.equal(50);
                LGG(-10, 90, 4)(0).should.equal(-10);
                LGG(-10, 90, 4)(4).should.equal(90);
                LGG(0, 3, 1)(0).should.equal(0);
                LGG(0, 3, 1)(1).should.equal(3);
            });
        });
    });
    describe("need Fn: mutate_styleCSD using a LGG, elem.style Property, element_properties", function () {
        describe("Fn: (csd_prop, elem, elem_ndx, elem_sib_lst) -> mutated elem_style_csd.", function () {
            it("should format style.opacity", function () {
                //TODO stub only, insert actual FN return
                ("0.12345").should.be.a("String").and.gte("0").and.lte("1");
            });
            it("should format style.fontSize", function () {
                //TODO stub only, insert actual FN return
                ("12.345%").should.be.a("string");
                // have a "%" at end
                // be gte some number
            });

        });

    });
});

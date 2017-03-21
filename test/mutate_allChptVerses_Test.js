/**
 * mutate_allChptSet.js
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    pipe = R.pipe,
    compose = R.compose;

let mocha = require('mocha'),
    describe = mocha.describe,
    context = mocha.describe,
    it = mocha.it;
//
let chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

// CODE UNDER TST
let H = require('../h/H');
let _thisSet_MUTATED_by = H._thisSet_MUTATED_by;
let _APPLY_thisFn_to = H._APPLY_thisFn_to;
let _data = H.Spans_FROM_theDocument_GIVEN_aSelector;
let Fn = (el, ndx, set) => {
};

const mutate_allChptVerses = (document) => {
    return _thisSet_MUTATED_by(document, Fn)
};

describe(`mutate_allChptVerses:: DOC -> [SPAN.verse]
    I can choose input:_APPLY_thisFn_to(Fn, Doc)||thisSet_MUTATED_by(Doc,Fn)`, () => {
    describe(`let's choose Fn:thisSet_MUTATED_by(aDocument)..
        and use `, () => {

    });
});
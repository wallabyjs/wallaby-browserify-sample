/**
 * Created by CLIF on 3/23/2017.
 */
"use strict";
// let R = require('ramda');
let mocha = require('mocha')
    , describe = mocha.describe
    // , context = mocha.describe
    // , it = mocha.it
;
let chai = require('chai')
    // , should = chai.should()
;
describe(`In general the code style is 
    Fn( Fn, Data) -> Fn..
AND Fn(Fn, Data) -> Data  at the end of the project.`, () => {
});
describe(`I will try and use FUNCTIONS beginning with 'mutate_...' 

    They will be general late on, but for now I list them in project specific names.
    e.g. mutate_ChptVerses(document) ACTUALLY STEMS FROM 
         mutate_aSet(querySelectStr, documents)
         `, () => {
    describe(`mutate_ChptVerses..`, () => {

    });
    describe(`mutate_aChptVerse..`, () => {

    });
    describe(`mutate_VerseStyleAttrs..`, () => {

    });
    describe(`mutate_aStyleAttr..`, () => {

    });
    describe(`mutate_allAttrProps..`, () => {

    });
    describe(`mutate_aAttrProp..`, () => {

    });
});

"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;
let mocha = require('mocha'),
    describe = mocha.describe,
    it = mocha.it;
let chai = require('chai'),
    should = chai.should();
//TODO put all these in h/
// ***************************

let elem;
let makeA_lstOf_KeyValuPairs = dct => R.toPairs(dct);// DICT.{{k,v}, {k,v} ...} -> LST.[[k,v], [k,v] ...]

let styleSomeElem = curry( //ELEM -> LST -> ELEM
    (elem, kv ) => {elem['style'][kv[0]] = kv[1]; return elem});

let styleThisElem = curry(elem => styleSomeElem(elem));// LST -> ELEM
/**
 *  ..... styleThisElem:: DICT -> ELEM -> ELEM
 *  USAGE:
 */

let TEST_styleThisElement = () => {
    let elem;
    mocha.beforeEach(
        () => {
            elem = {
                style: {
                    backgroundColor: 'blue',
                    color: ''
                }
            }
        });// a stub element
    xdescribe(`makeA_lstOf_KeyValuPairs::`, () => {
        it(`should return lists of k, v pairs`, () => {
            makeA_lstOf_KeyValuPairs({k1: 'v1', k2: 'v2'}).should.deep.equal([['k1', 'v1'], ['k2', 'v2']])
        });
    });
    describe(`make stub element w/ style and style properties: color and backgroundColor.`, () => {
        it(`should return elem.styles`, () => {
            elem.style.backgroundColor.should.equal('blue');
            elem.style.color.should.not.equal('red');
        });
    });
    describe(`styleSomeElem`, () => {
        it(`should need an Elem and a kv list`, () => {
            styleSomeElem(elem, ['color', '']).should.exist;
            styleSomeElem(elem, ['color', '']).style.should.exist;
            styleSomeElem(elem, ['color', 'purple']).style.color.should.equal('purple');
        });
    });
    describe(`styleThisElem`, () => {
        let styleIt = styleSomeElem(elem);
        it(`should need just a kv list`, () => {
            styleIt(['color', 'red']).should.exist;
            styleIt(['color', 'red']).style.should.exist;
            styleIt(['color', 'red']).style.color.should.equal('red');
        });
    });

};

TEST_styleThisElement();

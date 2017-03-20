/**
 * composeWter_FormatterSpec
 * composeWter_FormatterSpec.js
 * CLEANED UP descriptions and names. Then continue to make a module that accepts Arguments: aLstOf_ReadClss_Verses, aDctOf_ReadClssLimits, theNdxOf_CurReadClss_Elems -> aLstOf_ReadClss_Verses
 */
"use strict";

// REQUIRES
let R = require('ramda');
let __ = R.__;
let compose = R.compose;
let divide = R.divide;
let multiply = R.multiply;
let concat = R.concat;
let always = R.always;
let prop = R.prop;
let length = R.length;
let curry = R.curry;
let add = R.add;
let toString = R.toString;
let identity = R.identity;
//
// FUNCTIONS
let roundToTwoPlaces = require('../h/roundToTwoPlaces');

let _ReadClss_CsdLimits; // STR.readClssName -> DCT.readClss_CsdLimits
_ReadClss_CsdLimits = require('get_aReadClss_CsdLimits');
//
// let _formatOpacity; // a -> STR
// _formatOpacity = require('../src/Elem_Style_Formatters')._formatOpacity;
//
// let _formatFontSize;// N -> STR
// _formatFontSize = require('../src/Elem_Style_Formatters')._formatFontSize;


// CODE UNDER TEST
let _ElemWTER;// D->L->N -> N
// describe(`_ElemWTER:: D -> L -> N -> N returns this_Elem's relative Weight
//         asFnOf  Its_ReadClss
//                 to set its Weight Limits
//         and     Its_RelativePosition

let _beg = prop('csdBeg');// DCT -> a
let _end = prop('csdEnd');// DCT -> a
let _incLength = compose(add(1), length);// LST -> N
let _incNdx = add(1);

_ElemWTER = curry(// (dct, lst, ndx) => _delta(dct) / _incLength(lst) * ( 1+ndx) + _beg(dct)
    (dct, lst, ndx) => roundToTwoPlaces((_end(dct) - _beg(dct)) / _incLength(lst) * _incNdx(ndx) + _beg(dct))
); //.8/2*1+.2 ->.6

let weight_aReadClss_Elem;// S->L->N -> N
weight_aReadClss_Elem = R.useWith(_ElemWTER, [_ReadClss_CsdLimits, identity, identity]); // Str -> L, N -> N

module.exports = {weight_aReadClss_Elem, _ElemWTER};

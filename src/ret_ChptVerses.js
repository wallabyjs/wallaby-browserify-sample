"use strict";

let R = require('ramda')
//     , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
    , curry = R.curry
;

let H = require('../h/H');

/**
 * .... Fn:: ret_ChptVerse() is a Fn that RETURNS aSet_ofChptVerses GIVEN aQuerySTR WHEN APPLIED TO theDocument div.chptr
 * USAGE: ret_allChptVerses(document) -> allChptVerses
 */
const ret_ChptVerse = curry(H.Spans_FROM_theDocument_GIVEN_aSelector('div .chptr span')); //

module.exports = ret_ChptVerse; // Document -> [aSet]
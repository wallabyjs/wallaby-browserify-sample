"use strict";

// let R = require('ramda')
//     , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
//     , curry = R.curry
// ;

let H = require('../h/H');

/**
 * .... Fn:: allChptVersesFrom() is a Fn that RETURNS aSet_ofVerses GIVEN this aQuerySTR when APPLIED TO theDocument div.chptr
 * USAGE: ret_allChptVerses(document) -> allChptVerses
 */
const allChptVersesFrom = H.Spans_FROM_theDocument_GIVEN_aSelector('body  div .chptr span');//

module.exports = allChptVersesFrom; // Document -> [aSet]
//
"use strict";

let R = require('ramda')
//     , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
    , curry = R.curry
;

let H = require('../h/H');

/**
 * .... Fn ret_ChptVerses(theDocument) ->  aSet_ofChptVerses ::DOC -> [Verses]
 * for the Arg: STR of which Verse
 * USAGE: ret_allChptVerses(document) -> allChptVerses
 */
const ret_ChptVerse = curry(H.Spans_FROM_theDocument_GIVEN_aSelector('div .chptr span')); //

module.exports = ret_ChptVerse; // Document -> [aSet]
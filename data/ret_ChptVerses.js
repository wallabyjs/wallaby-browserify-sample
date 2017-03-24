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
const ret_ChptVerses = curry(doc => doc.querySelectorAll('div .chptr span')); //

module.exports = ret_ChptVerses; // Document -> [aSet]
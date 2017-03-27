"use strict";
let R = require('ramda')
    , curry = R.curry
    // , pipe = R.pipe
;
let h = require('../h/H');

// ************* FUNCTIONS
let mutate_anAttr = require('../h/alter/anElemStyleAttr');  // STR -> ELEM -> ELEM
//
// ************* DATA
let ret_allChptVerses = curry(doc => doc.querySelectorAll('div .chptr, span')); // (doc) -> SET

// ************* MAIN: CodeUnderTest:: MAP_aSet(FN)(DATA)
let MAP_aSet = require('../h/alter/aSet'); // (Fn -> SET) -> SET

const RED_ify_someChptVerses = curry(
    (doc, beg_foc) => {
        let Redify_anAtttr = mutate_anAttr("color:red");// ELEM ->ELEM
        let redify_anElem = curry(
            /**
             *
             * @param beg_foc focus
             * @param el
             * @param ndx
             * @param set
             * @return : a modified Elem
             */
            (el, ndx, set) => Redify_anAtttr(el)
        );
        MAP_aSet(redify_anElem, ret_allChptVerses(doc));
    });
// ************* INVOKE this Fn as the main
module.exports = RED_ify_someChptVerses; // Document -> [Verses]
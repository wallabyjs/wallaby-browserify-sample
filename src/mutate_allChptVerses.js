/**
 * mutate_aSet.js
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    pipe = R.pipe,
    compose = R.compose;

/**
 *  two point of views for ending up with all Verses mutated.
 *  (1)fixed Noun.setOfVerses   Param: Verb
 *  (2)fixed Verb               Param: NounSet
 *
 */

/**
 * mutate_aSet::
 * @param fn
 * @param set
 */
const thisSet_MUTATED_by = R.flip(R.map);    // -> Set (now HAS set WANTS Fn)  -> Fn  -> Set

const _APPLY_thisFn = R.map;       //  Fn -> (now HAS Fn WANTS set) -> Set -> Set

// to isolate this to just a document set of verses we will need
// selectDocSubSet

module.exports = {thisSet_MUTATED_by, _APPLY_thisFn};

/**
 * A style note on naming functions: i.e.  Active Subj Verb DO IDO
 *
 *  Active: thisFn MUTATES allVerses                FnName._MUTATE_allVerses: Fn -> SET-> Fn -> SET
 *                      < USING a function typically named _MUTATE_aVerse>
 *  Passive: allVerses areMUTATED                   FnName._allVerses_areMUTATED -> DO
 *                      <USING _MUTATE_aVerse By thisFn>
 *
 *
 *  Active: thisFn APPLIES _MUTATE_aVerse           FnName._APPLY_MUTATE_aVerse: SET -> SET
 *                      <TO aSet of Verses By thisFn>
 *  Passive:_MUTATE_aVerse isAPPLIED                FnName._MUTATE_aVerse_isAPPLIED: SET -> SET
 *                      <TO allVerses BY thisFn >
 */

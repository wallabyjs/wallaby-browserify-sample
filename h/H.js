/**
 *Helpers:
 * Created by CLIF on 3/20/2017.
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    pipe = R.pipe,
    compose = R.compose;

const Spans_FROM_theDocument_GIVEN_aSelector = curry(
    /**
     *  ..... Spans_FROM_theDocument_GIVEN_aSelector::
     *  this is a Fn that RETURNS aSet_ofSpans FROM theDocument GIVEN aQuerySTR.
     *  rephrased in passiveVoice aSet_ofSpans isRETURNED FROM theDocument GIVEN aQuerySTR.
     * @param q_str
     * @param doc
     * @return aSet
     */
    (q_str, doc) => doc.querySelectorAll(q_str)
);
module.exports.Spans_FROM_theDocument_GIVEN_aSelector = Spans_FROM_theDocument_GIVEN_aSelector;

/**
 *  two point of views for ending up with all Verses mutated.
 *  (1)thisSet_MUTATED_by ::  FIRST -> Set (HAS set,  WANTS Fn )  -> Fn  ->  TO RET Set
 *  (2)_APPLY_thisFn_to ::       FIRST -> Fn  (HAS Fn ,  WANTS Set)  -> Set ->  TO RET Set
 *
 */

const _thisSet_MUTATED_by = curry(
    /**
     *  .....   thisSet_MUTATED_by:: SET -> Fn -> SET
     * FIRST -> aSet (now HAS set,  WANTS Fn)  -> Fn  ->  TO RET aSet
     * @param set
     * @param fn
     */
    (set, fn) => R.addindex(R.map)(fn, set));

const _APPLY_thisFn_to = curry(
    /**
     *  .... _APPLY_thisFn_to:  Fn -> Set -> Set
     *  (now HAS Fn, WANTS set)
     * @param fn
     * @param set
     */
    (fn, set) => R.addindex(R.map)(fn, set));

module.exports = {
    _thisSet_MUTATED_by,
    _APPLY_thisFn_to,
    Spans_FROM_theDocument_GIVEN_aSelector
};
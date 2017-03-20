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
 *  (1)thisSet_MUTATED_by ::  FIRST -> Set (now HAS set,  WANTS Fn )  -> Fn  ->  TO RET Set
 *  (2)_APPLY_thisFn_to ::       FIRST -> Fn  (now HAS Fn ,  WANTS Set)  -> Set ->  TO RET Set
 *
 */

const thisSet_MUTATED_by =curry(
    /**
     *  .....   thisSet_MUTATED_by:: SET -> Fn -> SET
     * FIRST -> aSet (now HAS set,  WANTS Fn)  -> Fn  ->  TO RET aSet
     * @param set
     * @param fn
     */
    (set, fn) => R.map(fn, set));    // FIRST -> Set (now HAS set,  WANTS Fn)  -> Fn  ->  TO RET Set

const _APPLY_thisFn_to = curry(
    /**
     *  .... _APPLY_thisFn_to:  Fn -> Set -> Set
     *  (now HAS Fn, WANTS set)
     * @param fn
     * @param set
     */
    (fn, set) => R.map(fn, set));



module.exports = {thisSet_MUTATED_by, _APPLY_thisFn_to};
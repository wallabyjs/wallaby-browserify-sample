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
 *  (1)thisSet_MUTATED_by ::  FIRST -> Set (HAS set,  WANTS Fn )  -> Fn  ->  TO RET Set
 *  (2)_APPLY_thisFn_to ::       FIRST -> Fn  (HAS Fn ,  WANTS Set)  -> Set ->  TO RET Set
 */

const mutate_aSet_with_aFn = curry(
    /**
     *  .....   mutate_aSet_with_aFn SET -> Fn -> SET
     *  .....   thisSet_MUTATED_by:: SET -> Fn -> SET
     * FIRST -> aSet (now HAS set,  WANTS Fn)  -> Fn  ->  TO RET aSet
     * @param set
     * @param fn
     */
    (set, fn) => R.map(fn, set));
const _APPLY_thisFn_to = curry(
    /**
     *  .... _APPLY_thisFn_to:  Fn -> Set -> Set
     *  (now HAS Fn, WANTS set)
     * @param fn
     * @param set
     */
    (fn, set) => R.map(fn, set));

// const mutate_allChptVerses = (set, Fn) => {
//     return _thisSet_MUTATED_by(set, Fn)
// };


module.exports = {mutate_aSet_with_aFn, _APPLY_thisFn_to};
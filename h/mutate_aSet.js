/**
 * mutate_aSet.js
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    pipe = R.pipe,
    compose = R.compose;

const mutate_aSet = curry(
    /**
     *  ..... mutate_aSet:: indexMaps(MUTATE_anElem, aSET) -> aSET
     * @param fn: ->MUTATE_anElem
     * @param set: typically aSet of Verses
     * @return aSet: transformed by fn
     */
    (fn, set) => R.addIndex(R.map)(fn)(set));

module.exports = mutate_aSet;
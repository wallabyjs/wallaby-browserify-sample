/**
 * alter_aSet.js
 */
"use strict";

let R = require('ramda')
    , curry = R.curry
    // ,pipe = R.pipe
    // ,compose = R.compose
;

const alter_aSet = curry(
    /**
     *  ..... alter_aSet:: indexMaps(alter_anElem, aSET) -> aSET
     * @param fn: ->alter_anElem
     * @param set: typically aSet of Verses
     * @return aSet: transformed by fn
     */
    (fn, set) => R.addIndex(R.map)(fn)(set));

module.exports = alter_aSet;
/**
 * Created by CLIF on 2/3/2017.
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;

/**
 *  ..... pureElemQuery1:: STR -> (DOC -> ELEM)
 */
module.exports = R.invoker(1, 'querySelector'); // STR -> (DOC -> ELEM);
/**
 * Created by CLIF on 1/28/2017.
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;


let styleTheFirstLine = require(
    '../src/styleTheFirstLine');
let setVersionNum = require(
    '../src/setVersionNumOnIndexHTML');

/**
 * mutateTheDOM::
 * @param dom
 * @return {Element}
 */
module.exports =
// compose(styleTheFirstLine, setVersionNum);
compose(setVersionNum, styleTheFirstLine); // both this and the above work!!

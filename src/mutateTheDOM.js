/**
 * Created by CLIF on 1/28/2017.
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;
/**
 * mutateTheDOM::
 * @param dom
 * @return {Element}
 */

let styleTheFirstLine = require('../src/styleTheFirstLine');
let setVersionNum = require('../src/setVersionNumOnIndexHTML')('0.0.3');

module.exports = curry(
    dom => styleTheFirstLine(dom)
    // dom => setVersionNum(dom)
);

/**
 * Created by CLIF on 1/28/2017.
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;


let mutateTheFirstLine = require(
    '../src/mutateTheFirstLine');
let mutateTitle = require(
    '../src/mutateTitle_VersionNumber');

/**
 * mutateTheDOM::
 * @param dom
 * @return {Element}
 */
module.exports =
// both below work!!
// compose(mutateTheFirstLine, mutateTitle);
    compose(mutateTitle, mutateTheFirstLine);

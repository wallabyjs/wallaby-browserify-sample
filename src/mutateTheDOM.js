/**
 * Created by CLIF on 1/28/2017.
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    // pipe = R.pipe,
    compose = R.compose;

let mutateTheFirstLine = require(
    '../src/mutate_anElemStyleAttr');//    STR.css->ELM->ELM
let mutateTitle = require(
    '../src/mutateTitle_VersionNumber');

/**
 * mutateTheDOM:: (FN -> DOCUMENT) -> DOCUMENT.
 * It returns a function when applied to a html document changed some of its nodes.
 * @param dom
 * @return {Element}
 */
module.exports =
// both below work!!
compose(mutateTheFirstLine, mutateTitle);
    // compose(mutateTitle, mutateTheFirstLine);

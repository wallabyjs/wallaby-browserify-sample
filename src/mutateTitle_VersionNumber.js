/**
 * Created by CLIF on 1/29/2017.
 */

"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;
// ***************************
let VersionDct = require('../data/VersionDct');
// ***************************
let cb = x => console.log('   -> ' + x);
/**
 * ..... getVersionStr:: DCT -> STR
 */
let getVersionStr = () => {
    let getVersion = R.prop('version');// DCT -> STR
    let formatVersion = vers_str => "wbSample ver: " + vers_str;// STR -> STR
    return R.compose(formatVersion, getVersion)(VersionDct)
};
/**
 *  ..... pureElemQuery:: DOC -> STR -> ELEM
 */
let pureElemQuery = R.invoker(1, 'querySelector'); // N-> STR -> (DICT -> ELEM);
/**
 *  ..... getTheTitleElem:: DOC -> Elem
 */
let getTheTitleElem = pureElemQuery('title');//DICT -> ELEM
/**
 * ..... setInnerHTML_value:: Elem -> Elem
 */
let setInnerHTML = el => el["innerHTML"] = getVersionStr()
    ;// EL -> EL
/**
 * ..... mutateTitle_VersionNumber:: DOC -> DOC
 *      sets document titleElement to
 *
 * getVersionStr:: DCT -> STR
 * getTheTitleElem:: DOC -> Elem
 * setInnerHTML_value:: Elem -> Elem
 * @param doc
 */
module.exports = doc => {
    // compose(R.tap(cb), setInnerHTML, R.tap(cb), getTheTitleElem)(doc);
    compose(setInnerHTML, getTheTitleElem)(doc);
    return doc
};
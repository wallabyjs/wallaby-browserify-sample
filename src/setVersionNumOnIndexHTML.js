/**
 * Created by CLIF on 1/29/2017.
 */

"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;
// ***************************
let VersionDct = require('../data/VersionDct');

let cb = x => console.log('   -> ' + x);
let getVersion = R.prop('version');// DCT -> STR
let formatVersion = vers_str => "wbSample ver: " + vers_str;// STR -> STR
/**
 * ..... getVersionStr:: DCT -> STR
 */
let getVersionStr = R.compose(formatVersion, getVersion);
/**
 *  ..... getTheTitleElem:: DOC -> Elem
 */
let getTheTitleElem = R.invoker(1, 'querySelector')('title');//DOC -> ELEM

/**
 * ..... mutateTitle_VersionNumber:: DOC -> DOC
 *      sets document titleElement to
 *
 * getVersionStr:: DCT -> STR
 * getTheTitleElem:: DOC -> Elem
 * setInnerHTML_value:: Elem -> Elem
 * @param doc
 */
module.exports = curry(
    doc => {
        /**
         * .... setInnerHTML_value:: Elem -> Elem
         */
        let setInnerHTML = el => el.innerHTML = getVersionStr(VersionDct)
        ;// EL -> EL
        compose(R.tap(cb), setInnerHTML, getTheTitleElem)(doc);

        /**
         * ..... mutateTitle:: DOC -> DOC
         */
        const mutateTitle_VersionNumber = compose(setInnerHTML, getTheTitleElem); // DOC -> DOC
        // compose(R.tap(cb), mutateTitle_VersionNumber)(doc);

        return doc
    });
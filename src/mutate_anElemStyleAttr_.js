/**
 * Created by CLIF on 11/28/2016.
 */
"use strict";
let R = require('ramda'),
    compose = R.compose,
    curry = R.curry;

/**
 *
 */
const MUTATE_anElemStyleAttr_ = curry(
    /**
     *  ..... MUTATES_anElemStyleAttr
     *  ..... MUTATE_anElemStyleAttr_:: STR->ELEM->ELEM
     * mutates an Element style Attribute, not CSD
     * USAGE:
     * @param strOfCSS
     * @param elem
     * @return elem
     */
    (strOfCSS, elem) => {
        elem.setAttribute('style', strOfCSS);
    return elem
});
module.exports = MUTATE_anElemStyleAttr_;
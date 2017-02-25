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
const setElAttr = curry(
    /**
     *  ..... setElAttr:: STR->ELEM->ELEM
     *  usage: 
     * @param strOfCSS
     * @param elem
     * @return {*}
     */
    (strOfCSS, elem) => {
    elem.setAttribute('style', strOfCSS);
    return elem
});
module.exports = setElAttr;
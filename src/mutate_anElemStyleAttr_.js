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
const mutate_anElemStyleAttr_ = curry(
    /**
     *  ..... mutateS_anElemStyleAttr
     *  ..... mutate_anElemStyleAttr_:: STR->ELEM->ELEM
     * mutates an Element style Attribute, not CSD
     * USAGE:
     * @param css_str
     * @param elem
     * @return elem
     */
    (css_str, elem) => {
        elem.setAttribute('style', css_str)
        k;
    return elem
});
module.exports = mutate_anElemStyleAttr_;
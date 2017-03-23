/**
 * Created by CLIF on 11/28/2016.
 */
"use strict";
let R = require('ramda'),
    curry = R.curry;

const mutate_anElemStyleAttr = curry(
    /**
     *  ..... mutateS_anElemStyleAttr
     *  ..... mutate_anElemStyleAttr:: STR->ELEM->ELEM
     * mutates an Element style Attribute, not CSD
     * USAGE:
     * @param css_str
     * @param elem
     * @return elem
     */
    (css_str, elem) => elem.setAttribute('style', css_str)
);
module.exports = mutate_anElemStyleAttr;// STR -> ELEM -> ELEM
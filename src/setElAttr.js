/**
 * Created by CLIF on 11/28/2016.
 */
"use strict";
let R = require('ramda'),
    compose = R.compose,
    curry = R.curry;


const setElAttr = curry((str, elem) => {
    elem.setAttribute('style', str);
    return elem
});
module.exports = setElAttr;
/**
 *  ..... myTap:: a -> a
 * Created by CLIF on 2/3/2017.
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;

let sayX = x => console.log('x is ' + x);
module.exports = R.tap(sayX);// a => a and 'x is a' in console.log


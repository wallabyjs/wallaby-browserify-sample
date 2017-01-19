/**
 * Created by CLIF on 1/19/2017.
 */

"use strict";
let R = require('ramda');
let compose = R.compose;

let _toFixedTwo = x => x.toFixed(2);// a -> "a.xx":
module.exports = _toFixedTwo;

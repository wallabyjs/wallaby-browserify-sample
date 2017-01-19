/**
 * Created by CLIF on 1/19/2017.
 */

"use strict";
let R = require('ramda');
let compose = R.compose;

let roundToTwoPlaces = compose(
    R.divide(R.__, 100), Math.round, R.multiply(100)
);// N -> N
module.exports = roundToTwoPlaces;
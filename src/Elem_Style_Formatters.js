/**
 * Created by CLIF on 1/19/2017.
 */

"use strict";

let R = require('ramda');
let compose = R.compose;

let sayX = x => console.log('x is ' + x);
let myTap = R.tap(sayX);// a => a and 'x is a' in console.log

let _toFixedTwo = x => x.toFixed(2);// a -> "a.xx":
let roundToTwoPlaces = R.compose(
    R.divide(R.__, 100), Math.round, R.multiply(100)
);// N -> N

// CUT
let _formatOpacity = compose(_toFixedTwo);//a -> STR

let _formatFontSize = compose(R.concat(R.__, '%'), myTap, R.toString, R.multiply(100), roundToTwoPlaces);// N -> STR

module.exports = {_formatOpacity, _formatFontSize};

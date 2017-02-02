/**
 * Created by CLIF on 1/19/2017.
 */

"use strict";

let R = require('ramda'), compose = R.compose;

let sayX = x => console.log('x is ' + x);
let myTap = R.tap(sayX);// a => a and 'x is a' in console.log

let _toFixedTwo = require('../h/_toFixedTwo');
let roundToTwoPlaces = require('../h/roundToTwoPlaces');

// CUT
let _formatOpacity = compose(_toFixedTwo);//N -> STR
let _formatFontSize = compose(R.concat(R.__, '%'), myTap, R.toString, R.multiply(100), roundToTwoPlaces);// N -> STR
module.exports = {_formatOpacity, _formatFontSize};

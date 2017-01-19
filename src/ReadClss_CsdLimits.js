/**
 * Created by CLIF on 1/19/2017.
 */

"use strict";

let R = require('ramda');

// DATA
let CsdLimits = require('../data/CsdLimits');
// let CsdLimits = {
//     pst: {csdBeg: 0.2, csdEnd: 1.0},
//     cur: {csdBeg:1, csdEnd:1},
//     fut: {csdBeg:1, csdEnd:.4}};

//CODE
let _ReadClss_CsdLimits;// STR -> DCT

_ReadClss_CsdLimits = R.prop(R.__, CsdLimits);
module.exports = _ReadClss_CsdLimits;


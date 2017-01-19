/**
 * Created by CLIF on 1/19/2017.
 */

"use strict";

let R = require('ramda');

// DATA
let all_CsdLimits = require('../data/all_CsdLimits');
// for example : let CsdLimits = {
//     pst: {csdBeg: 0.2, csdEnd: 1.0},
//     cur: {csdBeg:1, csdEnd:1},
//     fut: {csdBeg:1, csdEnd:.4}};

//CODE
let a_ReadClss_CsdLimits;// STR -> DCT

a_ReadClss_CsdLimits = R.prop(R.__, all_CsdLimits);
module.exports = a_ReadClss_CsdLimits;


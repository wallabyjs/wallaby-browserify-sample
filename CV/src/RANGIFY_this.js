/**
 * Created by CLIF on 4/4/2017.
 */
"use strict";

let R = require('ramda')
;

const RANGIFY_this = R.pipe(R.length, R.range(0)); // [a] -> [N])
module.exports = RANGIFY_this; // LST.[a] -> LST.[N]

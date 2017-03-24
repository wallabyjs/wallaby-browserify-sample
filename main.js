"use strict";
let R = require('ramda')
    , curry = R.curry
    , pipe = R.pipe
;
let h = require('./h/H');

//************** MAIN *************************
let TRK = "wbSample/main.js";
console.log("< IN >" + TRK);

let mut = require('./src/RED_ify_someChptVerses');
mut(document);

console.log(' OUT> ' + TRK);
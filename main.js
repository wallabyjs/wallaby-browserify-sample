"use strict";
// let R = require('ramda')
// , curry = R.curry
// , pipe = R.pipe
// ;
// let h = require('./h/H');

//************** MAIN *************************
let TRK = "wbSample/main.js";
console.log("< IN >" + TRK);

let fn = require('./src/RED_ify_someChptVerses');
fn(document, 2);

console.log(' OUT> ' + TRK);
/**
 *  I CAN CALL mutateParent AND .mutateCSD FROM main AND SEE effect IN index.html,,,
 */

"use strict";

let _ = require('ramda');
let map = _.map;
let compose = _.compose;
let curry = _.curry;
// let P = require('ramda-fantasy');// new
// let Identity = P.Identity;
// let Maybe = P.Maybe;
// let IO = P.IO.IO;
// let runIO = P.IO.runIO;
//*********************************************
let TRK = "main.js:web-browser-Sample", RET;
console.log("< IN >" + TRK);

let chptSpns = document.querySelectorAll(".chptr span");
let aRDiv = document.querySelector(".pst");
let aSpan = _.nth(1)(chptSpns);
// functions
let mutateCSD = require('./src/mutateElt').mutateElt_CSD;
let mutateParent = require('./src/mutateElt').mutateElt_parent;
let _appendChld = require('./src/mutateElt')._appendChld;

let elt;
elt = mutateCSD('fontSize', "120%")(aSpan);
elt = mutateCSD('opacity', ".4")(elt);
elt = mutateParent(aRDiv)( elt);

console.log(elt.innerHTML);

// console.log('  OUT>' + TRK);

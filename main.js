/**
 *  expect I can call src/mtt_Elt.mutate from main ans see effect in index.html
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
let aSpan = _.nth(2)(chptSpns);
let mutate = require('./src/mutateElt');
let elt = mutate('fontSize', "150%")(aSpan);

console.log(aSpan.innerHTML);

console.log('  OUT>' + TRK);

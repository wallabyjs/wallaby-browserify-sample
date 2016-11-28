/**
 *  expect I can call src/mtt_Elt.mutate from main ans see effect in index.html
 */
"use strict";

let _ = require('ramda');
var map = _.map;
var compose = _.compose;
var curry = _.curry;
// var P = require('ramda-fantasy');// new
// var Identity = P.Identity;
// var Maybe = P.Maybe;
// var IO = P.IO.IO;
// var runIO = P.IO.runIO;

//*********************************************
let TRK = "main.js:web-browser-Sample", RET;
console.log("< IN >" + TRK);

let chptSpns = document.querySelectorAll(".chptr span");
let aSpan = _.nth(2)(chptSpns);
let mutate = require('./src/mutateElt');
let elt = mutate('fontSize', "150%")(aSpan);

console.log(aSpan.innerHTML);

console.log('  OUT>' + TRK);

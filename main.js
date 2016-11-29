/**
 * Broadly, a readEvent triggers everything.
 *      that event sets the  curRClss.beginNdx
 *          which refills the three readClssDiv containers with spanNLs
 *          which requires each CSD in each span in each readClssDiv to be mutated.
 *          the function: mutateElt(elt, e_ndx, e_lst) will be mapped onto each Elt:span.
 *
 *  161129 ->  CAN SEE effect IN index.html of INVOKING mutateElt_parent() AND .mutateElt_CSD() IN main().
 *  NEXT subsume both of these in a  new function: mutateElt(elt, e_ndx, e_lst)
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
let mutateElt_CSD = require('./src/mutateElt').mutateElt_CSD;
let mutateElt_parent = require('./src/mutateElt').mutateElt_parent;
let _appendChld = require('./src/mutateElt')._appendChld;

let elt;
elt = mutateElt_CSD('fontSize', "120%")(aSpan);
elt = mutateElt_CSD('opacity', ".4")(elt);
elt = mutateElt_parent(aRDiv)( elt);

console.log(elt.innerHTML);

// console.log('  OUT>' + TRK);

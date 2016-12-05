/**
 * Broadly, a readEvent triggers everything.
 *      that event sets the  curRClss.beginNdx
 *          which refills the three readClssDiv containers with spanNLs
 *          which requires each CSD in each span in each readClssDiv to be mutated.
 *          the function: mutateElt(elt, e_ndx, e_lst) will be mapped onto each Elt:span.
 *
 *  161129 ->  CAN SEE effect IN index.html of INVOKING mutateElt_parent() AND .mutateSpan_Csd() IN main().
 *  NEXT subsume both of these in a  new function: mutateElt(elt, e_ndx, e_lst)
 *  someDay I should see if I can wallaby test main.js by adding the loadFixtures. 16120955
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
let TRK = "wbSample/main.js";
console.log("< IN >" + TRK);

let chptSpns = document.querySelectorAll(".chptr span");
let stubDiv = document.querySelector(".fut");
let stubSpan = _.nth(1)(chptSpns);
// functions
let mutateSpan_Csd = require('./src/mutateElt').mutateSpan_Csd;
let mutateSpan_rcParent = require('./src/mutateElt').mutateSpan_rcParent;

let MUTATE_ELT =  compose(
    mutateSpan_Csd('fontSize', "75%"),
    mutateSpan_Csd('opacity', ".4"),
    mutateSpan_rcParent(stubDiv));
let MUTATED_ELT = MUTATE_ELT(stubSpan);

console.log(MUTATED_ELT.innerHTML);

console.log('  OUT>' + TRK);

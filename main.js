"use strict";
let R = require('ramda')
    , curry = R.curry
    , pipe = R.pipe
;
let h = require('./h/H');

//************** MAIN *************************
let TRK = "wbSample/main.js";
console.log("< IN >" + TRK);

// ************* FUNCTIONS
let mutate_anAttr = require('./src/mutate_anElemStyleAttr');
let mutate_anElem = curry(
    /**
     *
     * @param el
     * @param ndx
     * @param set
     * @return : a modified Elem
     */
    (el, ndx, set) => mutate_anAttr("opacity:0.6; color:red")(el)
);

// ************* DATA
let n_Spans = R.slice(2, 5); // SET -> SET

let allSpans = doc => doc.querySelectorAll('div .chptr, span'); // () -> SET
let aSet = pipe(allSpans, n_Spans); // SET -> SET

// ************* MAIN: CodeUnderTest:: MAP_aSet(FN)(DATA)
let MAP_aSet = require('./h/alter/aSet'); // (Fn -> SET) -> SET

const RED_ify_aSetOfVerses = doc => {
    MAP_aSet(mutate_anElem, aSet(doc));
};

// ************* INVOKE this Fn as the main
RED_ify_aSetOfVerses(document);

console.log(' OUT> ' + TRK);
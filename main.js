"use strict";
let h = require('./h/H');

//******************** main *************************
let TRK = "wbSample/main.js";
console.log("< IN >" + TRK);

// CodeUnderTest:: MAP_aSet(FN)(DATA)
let MAP_aSet = require('./h/mutate_aSet');// (Fn -> SET) -> SET

// HELPER
let _mutate_anAttr = require('./src/mutate_anElemStyleAttr');// (STR -> ELEM)
let allSpans = doc => doc.querySelectorAll('div .chptr, span');// ->  SET
let fourSpans = R.slice(1, 3);// SET -> SET
let aSet = pipe(allSpans, fourSpans)(document);

// FN::
let MUTATE_anElem = curry(
    /**
     *
     * @param el
     * @param ndx
     * @param set
     * @return : a modified Elem
     */
    (el, ndx, set) => {

        return _mutate_anAttr("opacity:0.6; color:red")(el);
    }
);
// DATA


// let RET = MAP_aSet(MUTATE_anElem)(aSet);

console.log(' OUT> ' + TRK);
/**
 * Created by CLIF on 1/29/2017.
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;

/**
 *  ..... pureElemQuery:: DOC -> STR -> ELEM
 */
let pureElemQuery1 = R.invoker(1, 'querySelector'); // N-> STR -> (DICT -> ELEM);
/**
 *  ..... getTheFirstElem:: DOC -> Elem
 */
let getTheFirstElem = pureElemQuery1('#theFirst');//DOC -> ELEM
/**
 *  ..... getElemStyleCsd = elt=>elt.style;// ELEM -> CSD
 */
const getElemStyleCsd = elt => elt.style;
/**
 *  ..... def:: CSD -> CSD
 */

/**
 *  ..... mutateTheFirstLine:: DOC -> DOC
 */
module.exports = curry(
    doc => {
        // let csd = {fontSize: "45%", opacity: "0.3", color: "green"};



        let elt;
        elt = compose(getTheFirstElem)(doc);// DOC -> ELEM
        let styleCSD;
        styleCSD = compose(getElemStyleCsd, getTheFirstElem)(doc);
        // Color
        let _styleColor, _styleOpacity;

        let invokeSetProperty2 = R.invoker(2, 'setProperty');

        let stylePropColor = invokeSetProperty2('color');//
        let styleThisColor = R.flip(stylePropColor);
        _styleColor  = compose(styleThisColor, getElemStyleCsd, getTheFirstElem)(doc);
//TODO  CHAIN THE TWO _styleColor and _styleOpacity and some existing csd to mutate/set the CSD
        // Opacity
        let stylePropOpacity = invokeSetProperty2('opacity');//
        let styleThisOpacity = R.flip(stylePropOpacity);
        _styleOpacity  = compose(styleThisOpacity, getElemStyleCsd, getTheFirstElem)(doc);

        _styleColor('green');
        _styleOpacity(0.4);
        return doc
    }
);


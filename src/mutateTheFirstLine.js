/**
 * Created by CLIF on 1/29/2017.
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;

/**
 *  ..... pureElemQuery1:: STR -> (DOC -> ELEM)
 */
let pureElemQuery1 = require('../h/pureElemQuery1'); // STR -> (DOC -> ELEM);

/**
 *  ..... getTheFirstElem:: DOC -> Elem
 */
let getTheFirstElem = pureElemQuery1('#theFirst');//DOC -> ELEM
/**
 *  ..... getElemStyleCsd = elt=>elt.style;// ELEM -> CSD
 */
const getElemStyleCsd = elt => elt.style;
/**
 *  ..... resetTheCsd:: CSD -> CSD
 */
let invokeSetProperty2 = R.invoker(2, 'setProperty');

/**
 *  ..... mutateTheFirstLine:: DOC -> DOC
 */
module.exports = curry(
    doc => {

        // let elt;
        // elt = compose(getTheFirstElem)(doc);// DOC -> ELEM
        let styleCSD;
        styleCSD = compose(getElemStyleCsd, getTheFirstElem)(doc);// DOC -> CSD

        let _styleColor, _styleOpacity;
        // Color
        let stylePropColor = invokeSetProperty2('color');//
        let styleThisColor = R.flip(stylePropColor);
        // BROKEN - TRY AGAIN IN
        // let styleThisColor = R.compose(R.flip, stylePropColor, invokeSetProperty2)('color');
        // _styleThisColor = (prop_name, csd)=>{csd.prop_};// STR.propName -> CSD -> CSD
        _styleColor = compose(styleThisColor, getElemStyleCsd, getTheFirstElem)(doc);
        //TODO  WHAT  about passing the CSD; then at the end reset the elem.style


        //
        // Opacity
        let stylePropOpacity = invokeSetProperty2('opacity');//
        let styleThisOpacity = R.flip(stylePropOpacity);
        _styleOpacity = compose(styleThisOpacity, getElemStyleCsd, getTheFirstElem)(doc);

        _styleColor('green');
        _styleOpacity(0.4);
        return doc
    }
);


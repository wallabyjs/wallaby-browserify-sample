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
let getTheFirstElem = pureElemQuery1('#theFirst');//DICT -> ELEM
/**
 *  ..... getElemStyleCsd = elt=>elt.style;// ELEM -> CSD
 */
const getElemStyleCsd = elt => elt.style;
/**
 *  ..... mutateTheFirstLine:: DOC -> DOC
 */
module.exports = curry(
    doc => {
        // let csd = {fontSize: "45%", opacity: "0.3", color: "green"};

        let elt;
        elt = compose(getTheFirstElem)(doc);// .querySelector('#theFirst');
        let styleCSD;
        styleCSD = compose(getElemStyleCsd, getTheFirstElem)(doc);

        let _styleColor = R.flip(R.invoker(2, 'setProperty')('color'))(styleCSD);
        let _styleOpacity = R.flip(R.invoker(2, 'setProperty')('opacity'))(styleCSD);

        // AFTER: using ramda invoker
        _styleColor('green');
        _styleOpacity(0.4);// BUT NOT compose(_styleColor, _styleColor)
        return doc
    }
);


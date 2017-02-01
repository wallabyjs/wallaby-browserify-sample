/**
 * Created by CLIF on 1/29/2017.
 */
"use strict";

let R = require('ramda'),
    curry = R.curry;

/**
 *  ..... pureElemQuery:: DOC -> STR -> ELEM
 */
let pureElemQuery1 = R.invoker(1, 'querySelector'); // N-> STR -> (DICT -> ELEM);
let pureElemQuery2 = R.invoker(2, 'querySelector'); // N-> STR -> (DICT -> ELEM);
/**
 *  ..... getTheTitleElem:: DOC -> Elem
 */
let getTheTitleElem = pureElemQuery1('title');//DICT -> ELEM

/**
 *  ..... mutateTheFirstLine:: DOC -> DOC
 */
module.exports = curry(
    doc => {
        // let csd = {fontSize: "45%", opacity: "0.3", color: "green"};
        let elt = doc.querySelector('#theFirst');
        let styleCSD = elt.style;
        let _styleColor = R.flip(R.invoker(2, 'setProperty')('color'))(styleCSD);
        let _styleOpacity = R.flip(R.invoker(2, 'setProperty')('opacity'))(styleCSD);

    // BEFORE: hard code
        elt.style.backgroundColor = 'pink';
        styleCSD.opacity = '0.99';
        styleCSD.color = 'red';
    // AFTER: using ramda invoker
        _styleColor('green');
        _styleOpacity(0.4);// BUT NOT compose(_styleColor, _styleColor)
        return doc
    }
);


/**
 * Created by CLIF on 1/29/2017.
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;

/**
 *      ..... myTap::
 */
const myTap = require('../h/myTap');
/**
 *  ..... pureElemQuery1:: STR -> (DOC -> ELEM)
 */
let pureElemQuery1 = require('../h/pureElemQuery1'); // STR -> (DOC -> ELEM);
/**
 *  ..... getTheFirstElem:: DOC -> Elem
 */
let getTheFirstElem = pureElemQuery1('#theFirst');//DOC -> ELEM

/**
 *  ..... getElem_styleOBJ = elt=>elt.style;// ELEM -> CSD
 */
const getElem_styleOBJ = elt => elt.style;

/**
 *  ..... restyle_aCSD:: LST.propName -> LST. propValu  -> DICT.CSD
 *
 */
const restyle_aCSD = require('../src/restyle_aCSD');


let styleObj;
styleObj = compose(getElem_styleOBJ, getTheFirstElem);// DOC -> CSD
let csdKeys = ['opacity', 'color'];
let csdVals = ['0.774', 'green'];
let CSD = restyle_aCSD(csdKeys, csdVals);// -> OBJ:CSD

/**
 *  ..... mutateTheFirstLine:: DOC -> DOC
 */
module.exports = curry(
    doc => {

        console.log('should be a CSD.color: ' + CSD.color);

        return doc
    }
);


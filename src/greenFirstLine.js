/**
 * Created by CLIF on 1/29/2017.
 */
"use strict";

let R = require('ramda');

// greenFirstLine
module.exports =  dom => {
    let elt = dom.querySelector('#theFirst');
    let csd = {fontSize: "45%", opacity: "0.3", color: "green"};
    let eltStyle = elt.style;
    eltStyle.opacity = '0.73';
    eltStyle.color = 'red';
    eltStyle.color = 'green';
    // lets try lens
    let colorLens = R.lensProp('color');
    R.set(colorLens, 'green', eltStyle);
    // lets try assoc
    // R.assoc('color', 'green', eltStyle);
    // let sty =  (num, key, obj) =>  obj.key = num  ;
    // R.mapObjIndexed(sty, csd)(eltStyle);
    return dom
};


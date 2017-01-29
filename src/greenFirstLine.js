/**
 * Created by CLIF on 1/29/2017.
 */
"use strict";

// greenFirstLine
module.exports =  dom => {
    let elt = dom.querySelector('#theFirst');
    let eltStyle = elt.style;
    let csd = {fontSize:"45%",opacity:"0.3",color:"green"};
    Object.assign(eltStyle, csd);
    return dom
};


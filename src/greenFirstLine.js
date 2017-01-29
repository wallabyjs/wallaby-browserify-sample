/**
 * Created by CLIF on 1/29/2017.
 */
"use strict";

let R = require('ramda');

// greenFirstLine
module.exports =  dom => {
    let csd = {fontSize: "45%", opacity: "0.3", color: "green"};
    let elt = dom.querySelector('#theFirst');
    let styleCSD = elt.style;
    styleCSD.backgroundColor = 'pink';
    styleCSD.opacity = '0.73';
    styleCSD.color = 'red';
    styleCSD.setProperty('color', 'green', '');// this works
    // // LETS TRY invoker
    let styleColor = R.invoker(2, 'setProperty')('color');
    styleColor('green', styleCSD);
    let styleOpacity = R.invoker(2, 'setProperty')('opacity');
    styleOpacity('.4', styleCSD);
    //let // lets try lens
    // let colorLens = R.lensProp('color');
    // R.set(colorLens, 'green', styleCSD);
    // lets try assoc
    // R.assoc('color', 'green', styleCSD);
    // let sty =  (num, key, obj) =>  obj.key = num  ;
    // R.mapObjIndexed(sty, csd)(styleCSD);
    // LETS TRY
    // Object.assign(styleCSD, csd);
    // return dom // SEEMINGLY NOT NEEDED!!
};


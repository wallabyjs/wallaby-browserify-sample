/**
 * Created by CLIF on 1/29/2017.
 */
"use strict";

let R = require('ramda');

// styleTheFirstLine:: DOC -> DOC
module.exports =  doc => {
    let csd = {fontSize: "45%", opacity: "0.3", color: "green"};
    let elt = doc.querySelector('#theFirst');
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
};


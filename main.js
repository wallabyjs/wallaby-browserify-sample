"use strict";
let h = require('./h/H');

//******************** main *************************
let TRK = "wbSample/main.js";
console.log("< IN >" + TRK);

let _mutate = require('./src/mutate_anElemStyleAttr');

let _aSpan = doc => doc.querySelectorAll('div .chptr, span')[0];// -> NL
let aSpan = _aSpan(document);


console.log(' -> ' + aSpan.style.color);

_mutate("opacity:0.4; color:red", aSpan);

console.log(' -> ' + aSpan.style.color);

console.log(' OUT> ' + TRK);
let stop = 0;
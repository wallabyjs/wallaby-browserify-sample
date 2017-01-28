"use strict";

let R = require('ramda');

//*********************************************
let TRK = "wbSample/main.js";
console.log("< IN >" + TRK);
let _mutate = require('./mutateTheDOM');
_mutate(document);
console.log('  OUT>' + TRK);

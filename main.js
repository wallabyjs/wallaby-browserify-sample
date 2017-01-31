"use strict";

//******************** main *************************
let TRK = "wbSample/main.js";
console.log("< IN >" + TRK);
let _mutate = require('./src/mutateTheDOM');
_mutate(document);
console.log('  OUT>' + TRK);
//TODO PUT this project into GitHub 170131
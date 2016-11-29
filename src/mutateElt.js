/**
 * Created by CLIF on 11/28/2016.
 */
"use strict";
let _ = require('ramda');
let compose = _.compose;
let curry = _.curry;

/**
 *  ..... mutateCSD( S:prop_name -> a:prop_valu -> Elt: HTML_elt)  -> Elt
 *  USE:reset a specific HTML Style Object [CSD]  property and returns the mutated Element
 */
const mutateCSD = curry((prop_name, prop_valu, elt) => {//( S:prop_name -> a:prop_valu -> Elt: HTML_elt)  -> Elt
    elt.style[prop_name] = prop_valu;
    return elt
});

module.exports = {mutateCSD};
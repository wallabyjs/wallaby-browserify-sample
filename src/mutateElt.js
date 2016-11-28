/**
 * Created by CLIF on 11/28/2016.
 */
"use strict";
let _ = require('ramda');
let compose = _.compose;
let curry = _.curry;
/**
 *  ..... mutate( S:prop_name -> a:prop_valu -> Elt: HTML_elt)  -> Elt
 *  USE:reset a specific HTML Style Object [CSD]  property and returns the mutated Element
 */
// const mutate = curry((prop_name, prop_valu, elt) => {
module.exports = curry((prop_name, prop_valu, elt) => {
    elt.style[prop_name] = prop_valu;
    return elt
});

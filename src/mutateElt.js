/**
 * Created by CLIF on 11/28/2016.
 */
"use strict";
let _ = require('ramda');
let compose = _.compose;
let curry = _.curry;

/**
 *  ..... mutateElt_CSD( S:prop_name -> a:prop_valu -> Elt: HTML_elt)  -> Elt
 *  USE:reset a specific HTML Style Object [CSD]  property and returns the mutated Element
 */
const mutateElt_CSD = curry((prop_name, prop_valu, elt) => {//( S:prop_name -> a:prop_valu -> Elt: HTML_elt)  -> Elt
    elt.style[prop_name] = prop_valu;
    return elt
});

/**
 *  ..... mutateElt_parent::(Elt:to) -> Elt:me -> Elt:me
 * mutates DOM: using js append and insertBefore.
 */
let _appendChld = curry(( to, me)=> to.appendChild(me));
let mutateElt_parent = to => _appendChld(to);

module.exports = {mutateElt_CSD, mutateElt_parent};
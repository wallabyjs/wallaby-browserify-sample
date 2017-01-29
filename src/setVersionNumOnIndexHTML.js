/**
 * Created by CLIF on 1/29/2017.
 */

"use strict";

let R = require('ramda'),
curry = R.curry;
/**
 * setVersionNumOnIndexHTML:: DOM -> DOM
 * @param dom
 */
module.exports =  curry(
    (ver_str, dom ) => {
    let title = dom.querySelector('title');
    title.innerHTML = `version ${ver_str}`
});
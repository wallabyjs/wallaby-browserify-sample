/**
 * Created by CLIF on 1/29/2017.
 */

"use strict";

let R = require('ramda'),
    curry = R.curry;
/**
 * setVersionNumOnIndexHTML:: DOM -> DOM
 * @param doc
 */
module.exports = curry(
    doc => {
        let ver_str = '0.0.3';
        //TODO: require this from some data/version object
        let title = doc.querySelector('title');
        title.innerHTML = `wbSample ver: ${ver_str}`;
        return doc
    });
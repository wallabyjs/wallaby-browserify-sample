/**
 * Created by CLIF on 1/19/2017.
 */

"use strict";

let R = require('ramda'), compose = R.compose, curry = R.curry;

/**
 *  ..... restyle_aCSD:: LST.key_lst -> LST. valu_lst -> DICT.CSD
 *
 */
module.exports = R.curry(
    (key_lst, valu_lst) => R.zipObj(key_lst, valu_lst)
);// LST -> LST -> DICT.CSD

/**
 * Created by CLIF on 1/19/2017.
 */

"use strict";

let R = require('ramda'), compose = R.compose;

/**
 *  ..... restyle_aCSD:: {key, valu} -> CSD -> CSD
 *
 */
module.exports = R.curry(
    (prop_lst, valu_lst) => R.zipObj(prop_lst, valu_lst));

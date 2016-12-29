/**
 *linearGradientEffect: Fn:LGG:: N -> N -> N -> N
 * returns a weigh value: gte:wt_beg & lte:wt_end. Based an index:ndx value:gte:0 && lte:ndx_max.
 *
 * describe("LGG:for ndx: 0 to ndx_max, LGG(wt_beg, wt_end, ndx_max, ndx) -> wt_value"
 * LGG = (wt_beg, wt_end, ndx_max) => ndx => wt_beg + n/ndx_max * (wt_end-wt_beg);
 * Created by CLIF on 12/28/2016.
 */
"use strict";
let _ = require('ramda');
let compose = _.compose;
let curry = _.curry;

/**
 *  * describe("LGG:for ndx: 0 to ndx_max, LGG(wt_beg, wt_end, ndx_max, ndx) -> wt_value"
 */
module.exports = curry(
    (wt_beg, wt_end, ndx_max, ndx ) => wt_beg + ndx/ndx_max * (wt_end-wt_beg)
);// N->N->N -> N  -> N

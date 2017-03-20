/**
 *Helpers:
 * Created by CLIF on 3/20/2017.
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    pipe = R.pipe,
    compose = R.compose;

const Spans_FROM_theDocument_GIVEN_aSelector = curry(
    /**
     *  ..... Spans_FROM_theDocument_GIVEN_aSelector::
     *  this is a Fn that RETURNS aSet_ofSpans FROM theDocument GIVEN aQuerySTR.
     *  rephrased in passiveVoice aSet_ofSpans isRETURNED FROM theDocument GIVEN aQuerySTR.
     * @param q_str
     * @param doc
     * @return aSet
     */
    (q_str, doc) => doc.querySelectorAll(q_str)
);
module.exports.Spans_FROM_theDocument_GIVEN_aSelector = Spans_FROM_theDocument_GIVEN_aSelector;

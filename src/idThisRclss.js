/**
 *  idThisRclss.js
 */
"use strict";

let R = require('ramda');
// let compose = R.compose;
let curry = R.curry;

let Fn00 = curry(
    /**
     *  ..... Fn00:: DCT->EL->N->LST -> STR
     * @param dct
     * @param el
     * @param ndx
     * @param lst
     * @return {string}
     *
     * ACT: Fn returns a RclssName when applied with params;
     * PAS: an RclssName is returned when Fn is applied with params
     */
    (dct, el, ndx, lst) => {
        return (ndx < dct.beg) ? 'pst' :
            ndx >= (dct.beg + dct.lng) ? 'fut' :
                'cur'
    });

let Fn01 = curry(
    /**
     *  ..... Fn01:: ((DCT,EL,__,LST) -> N) -> STR
     * @param currBounds
     * @param el
     * @param el_ndx
     * @param el_lst
     *
     * ACT: Fn returns a CURRIED, PARTIAL FnXX applied with params: currBounds, el, __, el_lst
     * the returned FnXX returns a RclssName when applied to param:el_ndx
     * PAS: a partialed FnXX is returned when params:currBounds, el, __, and el_lst are applied.
     * an RclssName is returned when FnXX is applied to el_ndx
     */
    (currBounds, el, el_ndx, el_lst) => Fn00(currBounds)(el, R.__, el_lst));//

module.exports ={Fn01, Fn00};
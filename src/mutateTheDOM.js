/**
 * Created by CLIF on 1/28/2017.
 */
"use strict";
/**
 * mutateTheDOM::
 * @param dom
 * @return {Element}
 */
module.exports  = dom => {
    let elt = dom.querySelector('.This');
    elt.setAttribute("style", "color: purple");
    return dom
};

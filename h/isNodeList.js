/**
 * Created by CLIF on 11/24/2016.
 */
// "use strict";



module.exports = function (nodes) {
    var stringRepr = Object.prototype.toString.call(nodes);

    return typeof nodes === 'object' &&
        /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
        (typeof nodes.length === 'number') &&
        (nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0));
};

// module.exports.isNodeList;

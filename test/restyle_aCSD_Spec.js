/**
 * Created by CLIF on 1/19/2017.
 */
"use strict";
let R = require('ramda'),
    curry = R.curry;

let mocha = require('mocha'),
    describe = mocha.describe,
    it = mocha.it;

let chai = require('chai'),
    should =  chai.should();

const restyle_ = require('../src/restyle_aCSD');
// const restyle_ = curry(
//     (prop_lst, valu_lst) => R.zipObj(prop_lst, valu_lst));

describe(`restyle_aCSD:: {key, valu} -> CSD -> CSD`, ()=>{
    let dom, anElemStyle;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        dom = document;
    });
    it("should alter key:values.", function () {
        let anElemStyle = dom.querySelector('#theFirst').style;
        // BEFORE: hard code
        anElemStyle.backgroundColor = 'pink';
        anElemStyle.opacity = '0.99';
        anElemStyle.color = 'red';
        let oldCsd = restyle_(['opacity', 'color']);
        anElemStyle = oldCsd(['0.4', 'green']);
        anElemStyle.opacity.should.equal('0.4');
        anElemStyle.color.should.equal('green');
    })
});
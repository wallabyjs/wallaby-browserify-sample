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

const restyler = require('../src/restyle_aCSD');// LST -> LST -> DICT.CSD

describe(`restyle_aCSD:: LST.propName -> LST. propValu -> CSD -> CSD`, ()=>{
    let dom, anElem_styleObj;
    mocha.beforeEach(() => {
        loadFixtures('index.html');
        dom = document;
    });
    it(`should ..`, () => {
        // (1).should.equal(0);
    });

    it("should alter key:values.", function () {
        let anElem_styleObj = dom.querySelector('#theFirst').style;
        // BEFORE: hard code
        anElem_styleObj.backgroundColor = 'pink';
        anElem_styleObj.opacity = '0.99';
        anElem_styleObj.color = 'red';
        let baseCSD = ['opacity', 'color'];
        let restyleTo = restyler(baseCSD);
        anElem_styleObj = restyleTo(['0.4', 'green']);
        anElem_styleObj.opacity.should.equal('0.4');
        anElem_styleObj.color.should.equal('green');
    })
});
// "use strict";
var chai = require('chai');
var expect = chai.expect;
var Person = require('../src/Person');

describe('Person', function () {
  it('should report name', function () {
    expect(new Person('John').name).to.equal('John');
  });
  it('should also report friend', function () {
    expect(new Person('John', 'Clif').friend).to.equal('Clif');
  });
});
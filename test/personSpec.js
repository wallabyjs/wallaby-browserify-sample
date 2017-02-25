var chai = require('chai');
var expect = chai.expect;

var hbs = require('../src/a.hbs');

describe('it', function () {
  it('should work', function () {
    expect(hbs).to.be.defined;
  });
});
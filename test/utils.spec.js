const { expect } = require('chai');
const { upperCaseAndUnderscoreFormatter } = require('../src/utils');

describe('UPPER_CASE formatter', function() {
  it('should format "get data" to "GET_DATA"', function() {
    expect(upperCaseAndUnderscoreFormatter('get data')).to.equal('GET_DATA');
  });
});

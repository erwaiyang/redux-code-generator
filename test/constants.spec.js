const { expect } = require('chai');
const {
  constantsTemplate,
} = require('../src/constants');

describe('constants template', function () {
  it('should generate constants code', function () {
    expect(constantsTemplate('GET_DATA')).to.equal("export const GET_DATA = { REQUESTED: 'GET_DATA_REQUESTED', SUCCEEDED: 'GET_DATA_SUCCEEDED', FAILED: 'GET_DATA_FAILED',}");
  });
});

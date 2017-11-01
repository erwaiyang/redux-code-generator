const { expect } = require('chai');
const {
  constantsTemplate,
  actionTemplate,
  actionsTemplate,
} = require('../src/constants');

describe('constants template', function () {
  it('should generate constants code', function () {
    expect(constantsTemplate('GET_DATA')).to.equal("export const GET_DATA = { REQUESTED: 'GET_DATA_REQUESTED', SUCCEEDED: 'GET_DATA_SUCCEEDED', FAILED: 'GET_DATA_FAILED',}");
  });
});

describe('action template', function () {
  it('should generate action code', function () {
    expect(actionTemplate('GET_DATA', 'getData', 'FAILED')).to.equal('export function getDataFailed() { return { type: GET_DATA.FAILED } }');
  });
});

describe('actions template', function () {
  const actionsCode = [];
  before(function () {
    actionsCode.push(actionTemplate('GET_DATA', 'getData', 'REQUESTED'));
    actionsCode.push(actionTemplate('GET_DATA', 'getData', 'SUCCEEDED'));
    actionsCode.push(actionTemplate('GET_DATA', 'getData', 'FAILED'));
  });
  it('should generate actions code of all statuses', function () {
    expect(actionsTemplate('GET_DATA', 'getData')).to.equal(actionsCode.join('\n'));
  });
});

const { expect } = require('chai');
const {
  upperCaseAndUnderscoreFormatter,
  camelCaseFormatter,
} = require('../src/utils');

describe('UPPER_CASE formatter', function() {
  it('should format "get data" to "GET_DATA"', function() {
    expect(upperCaseAndUnderscoreFormatter('get data')).to.equal('GET_DATA');
  });
  it('should format action type composed of three or more words', function() {
    expect(upperCaseAndUnderscoreFormatter('update user nickname')).to.equal('UPDATE_USER_NICKNAME');
    expect(upperCaseAndUnderscoreFormatter('change password and sign in')).to.equal('CHANGE_PASSWORD_AND_SIGN_IN');
  });
});

describe('camelCase formatter', function() {
  it('should format correctly', function() {
    expect(camelCaseFormatter('get data')).to.equal('getData');
    expect(camelCaseFormatter('delete user data')).to.equal('deleteUserData');
    expect(camelCaseFormatter('sign out and refresh')).to.equal('signOutAndRefresh');
  });
});

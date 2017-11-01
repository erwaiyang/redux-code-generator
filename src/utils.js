function upperCaseAndUnderscoreFormat(value) {
  return value.replace(/\s/g, '_').toUpperCase();
}

module.exports = {
  upperCaseAndUnderscoreFormat,
};

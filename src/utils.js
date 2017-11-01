function upperCaseAndUnderscoreFormatter(value) {
  return value.replace(/\s/g, '_').toUpperCase();
}

module.exports = {
  upperCaseAndUnderscoreFormatter,
};

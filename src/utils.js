function upperCaseAndUnderscoreFormatter(value) {
  return value.replace(/\s/g, '_').toUpperCase();
}

function camelCaseFormatter(value) {
  return value.replace(/\s\w{1}/g, (match, p1) =>
    match.charAt(1).toUpperCase()
  );
}

module.exports = {
  upperCaseAndUnderscoreFormatter,
  camelCaseFormatter,
};

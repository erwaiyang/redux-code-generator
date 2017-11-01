const { upperCaseAndUnderscoreFormatter, camelCaseFormatter } = require('./utils');
const { constantsTemplate } = require('./constants');

const input = document.getElementById('input');
const result = document.getElementById('result');
input.addEventListener('input', (e) => {
  const { value } = e.target;
  const upperCased = upperCaseAndUnderscoreFormatter(value);
  const camelCased = camelCaseFormatter(value);
  const constantsCode = constantsTemplate(upperCased);
  result.innerHTML = constantsCode;
}, false);

const { upperCaseAndUnderscoreFormatter, camelCaseFormatter } = require('./utils');
const { constantsTemplate, actionsTemplate } = require('./constants');

const input = document.getElementById('input');
const constantsResult = document.getElementById('constants-result');
const actionsResult = document.getElementById('actions-result');

input.addEventListener('input', (e) => {
  const { value } = e.target;
  const upperCased = upperCaseAndUnderscoreFormatter(value);
  const camelCased = camelCaseFormatter(value);
  const constantsCode = constantsTemplate(upperCased);
  const actionsCode = actionsTemplate(upperCased, camelCased);
  constantsResult.innerHTML = constantsCode;
  actionsResult.innerHTML = actionsCode;
}, false);

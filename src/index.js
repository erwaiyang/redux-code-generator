const { camelCaseFormatter } = require('./utils');

const input = document.getElementById('input');
const result = document.getElementById('result');
input.addEventListener('input', (e) => {
  const { value } = e.target;
  const camelCased = camelCaseFormatter(value);
  result.innerHTML = camelCased;
}, false);

const statuses = ['REQUESTED', 'SUCCEEDED', 'FAILED'];

function constantsTemplate(ACTIONTYPE) {
  const objectContent = statuses.reduce((accum, currentVal) =>
    `${accum} ${currentVal}: '${ACTIONTYPE}_${currentVal}',`, '');
  return `export const ${ACTIONTYPE} = {${objectContent}}`;
}

module.exports = {
  statuses,
  constantsTemplate,
};

const STATUSES = ['REQUESTED', 'SUCCEEDED', 'FAILED'];

function constantsTemplate(ACTIONTYPE) {
  const objectContent = STATUSES.reduce((accum, currentVal) =>
    `${accum} ${currentVal}: '${ACTIONTYPE}_${currentVal}',`, '');
  return `export const ${ACTIONTYPE} = {${objectContent}}`;
}

function actionTemplate(ACTIONTYPE, actionType, status) {
  const formattedStatus = status.charAt(0) + status.slice(1).toLowerCase();
  return `export function ${actionType}${formattedStatus}() { return { type: ${ACTIONTYPE}.${status} } }`;
}

function actionsTemplate(ACTIONTYPE, actionType) {
  return STATUSES.map(status => actionTemplate(ACTIONTYPE, actionType, status)).join('\n');
}

module.exports = {
  STATUSES,
  constantsTemplate,
  actionsTemplate,
};

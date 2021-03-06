// toggle theme parameter on non CI env
// only required on html pages / dev mode
if (!process.env.CI_MODE) {
  const { parse } = require('querystring'); // eslint-disable-line
  const query = parse(window.location.search.substr(1));

  if (query.theme) {
    document.querySelector('html').className = `Theme--${query.theme}`;
  }
}

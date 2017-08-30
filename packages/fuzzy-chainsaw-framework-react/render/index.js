const React = require('react');
const ReactDom = require('react-dom/server');


module.exports.renderComponent = (Component) =>
  ReactDom.renderToStaticMarkup(React.createElement(Component));


module.exports.isFileRenderable = (key) =>
  key.indexOf('.test.jsx') === -1 &&
  key.indexOf('.example.jsx') === -1 &&
  key.indexOf('.md') === -1;


module.exports.getOutputName = (key) => {
  const full = key.substr(0, key.indexOf('.jsx')).substr(1);
  return `${full.substr(1)}.html`;
};
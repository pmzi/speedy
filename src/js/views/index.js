const React = require('react');
const ReactDOM = require('react-dom');

const IndexPage = require('./pages/IndexPage');

const jsx = (<IndexPage />);

ReactDOM.render(jsx, document.querySelector("#wrapper"));
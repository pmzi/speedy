const React = require('react');
const ReactDOM = require('react-dom');

const {Provider} = require('react-redux');

const mainStore = require('./stores/mainStore');

const IndexPage = require('./pages/IndexPage');

const jsx = (<Provider store={mainStore}>
    <IndexPage />
</Provider>);

ReactDOM.render(jsx, document.querySelector("#wrapper"));
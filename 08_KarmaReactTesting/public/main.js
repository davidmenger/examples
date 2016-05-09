/*
 * @author David Menger
 */
'use strict';

require('./less/default.less');

const App = require('./components/app.jsx');
const React = require('react');
const ReactDom = require('react-dom');

ReactDom.render(<App />, document.getElementById('app'));

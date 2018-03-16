'use strict';

console.log('App is running');

// JSX - JavaScript XML
var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);
var appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);

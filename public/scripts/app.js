console.log('App is running')

// JSX - JavaScript XML
var template = <p>This is JSX from app.js</p>;
var appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);
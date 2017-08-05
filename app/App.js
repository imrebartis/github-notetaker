
var React = require('react');
var ReactDOM = require('react-dom');
// Router will be a property of the object called Router
var Router = require('react-router').Router;
var routes = require('./config/routes');

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
)
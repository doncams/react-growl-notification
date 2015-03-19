//require('node-jsx').install();
var React = require('react/addons');

var App = require('./app');
jQuery(function($) {

    React.render(<App />, document.getElementById('app'));

});
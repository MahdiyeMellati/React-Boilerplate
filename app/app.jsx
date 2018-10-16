var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory}= require("react-router");
var Main = require('Main');
var actions= require('actions');
var store= require('configureStore').configure();

store.subscribe(()=>
{
  console.log('new state : ',store.getState() );
});
store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());
//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App class
require('style!css!sass!applicationStyles');


ReactDOM.render(

 <Main/>,
  document.getElementById('app')
);

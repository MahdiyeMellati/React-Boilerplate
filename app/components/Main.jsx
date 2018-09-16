var React = require('react');
var Search= require('Search');
var TodoList=require('TodoList');
var Main=React.createClass({
  getInitialState: function()
  {
    return{
      todos:
      [
        {
          id: 1,
          text:'Cooking'
        },
        {
          id:2,
          text:'Playing Music'
        }
      ]
    };
  },
  render: function()
  {
    var{todos}=this.state;
    return(
      <div>
        <div  className="page-title">
            Todo App
        </div>
        <div>
            <Search/>
        </div>

        <div>
          <TodoList todos={todos}/>
        </div>
      </div>

    )
  }

});
module.exports=Main;

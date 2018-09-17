var React = require('react');
var Search= require('Search');
var TodoList=require('TodoList');
var AddTodo= require('AddTodo');
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
  handleAddTodo: function(text)
  {
    alert('new todo'+ text)
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
        <div>
            <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      </div>

    )
  }

});
module.exports=Main;

var React = require('react');
var Search= require('Search');
var TodoList=require('TodoList');
var AddTodo= require('AddTodo');
var uuid=require('node-uuid')
var Main=React.createClass({
  getInitialState: function()
  {
    return{
      showCompleted:false,
      searchText:'',
      todos:
      [
        {
          id: uuid(),
          text:'Cooking'
        },
        {
          id:uuid(),
          text:'Playing Music'
        }
      ]
    };
  },
  handleAddTodo: function(text)
  {
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
  },
  handleSearch: function(showCompleted,searchText)
  {
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    });
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
            <Search onSearch={this.handleSearch}/>
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

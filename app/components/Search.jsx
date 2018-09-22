var React= require('react');
var Search= React.createClass(
{
  handleSearch: function()
  {
    var showCompleted=this.refs.showCompleted.checked;
    var searchText=this.refs.searchText.value;

    this.props.onSearch(showCompleted,searchText);

  },

  render: function()
  {
  return(
    <div className="container_header">
      <input type="search" ref="searchText" onChange={this.handleSearch} className="input_search" placeholder="Search todos..."></input>

        <label for="checkbox1">
          <input type="checkbox" ref="showCompleted" className="checkbox" onChange={this.handleSearch}>Show Completed </input>
          </label>
    </div>
    );
  }
});
module.exports=Search;

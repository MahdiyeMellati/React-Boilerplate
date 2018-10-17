var React= require('react');
var {connect}= require('react-redux');
var actions= require('actions');

export var Search= React.createClass(
{
  render: function()
  {
    var {dispatch,showCompleted,searchText}= this.props;
  return(
    <div className="container_header">
      <input type="search" ref="searchText"  className="input_search" placeholder="Search todos..." value={searchText} onChange={()=>{
            var searchText=this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText));
        }}></input>

        <label for="checkbox1">
          <input type="checkbox" ref="showCompleted" checked={showCompleted} className="checkbox" onChange={()=>{
              dispatch(actions.toggleShowCompleted());
            }}>Show Completed </input>
          </label>
    </div>
    );
  }
});
export default connect (
  (state)=>{
    return{
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(Search);

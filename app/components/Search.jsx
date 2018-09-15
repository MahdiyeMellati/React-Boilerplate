var React= require('react');
var Search= React.createClass(
{

  render: function()
  {
  return(
    <div>
      <input type="text" className="input_search" placeholder="Search todos..."></input>
      <input id="checkbox1" className="checkbox" type="checkbox"></input>
        <label for="checkbox1">Show Completed Todo</label>
    </div>
    );
  }
});
module.exports=Search;

import React from 'react';

var Vote = React.createClass({
  render: function() {
    return (
      <div className="vote">
        <a href="javascript:void(0)" className=""><span className="glyphicon glyphicon-triangle-top"></span></a>
        <div>{this.props.score}</div>
        <a href="javascript:void(0)" className=""><span className="glyphicon glyphicon-triangle-bottom"></span></a>
      </div>
    );
  }
});

module.exports = Vote;

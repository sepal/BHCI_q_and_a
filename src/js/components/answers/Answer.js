import React from 'react';

var Answer = React.createClass({
  render: function() {
    return (
      <div className="clearfix top15">
        <div className="col-sm-2 author">
          <div className="glyphicon glyphicon-user"></div>
          <div>{this.props.author}</div>
        </div>
        <div className="col-sm-10">
          {this.props.body}
        </div>
      </div>
    );
  }
});

module.exports = Answer;

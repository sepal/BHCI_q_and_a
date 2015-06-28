import React from 'react';
import Rx from 'rx-react';
import _ from 'lodash';

var Question = React.createClass({
  componentWillMount: function () {

  },
  render: function () {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
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

module.exports = Question;

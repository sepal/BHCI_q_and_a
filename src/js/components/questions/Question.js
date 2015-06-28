import React from 'react';
import Rx from 'rx-react';
import _ from 'lodash';

import AnswerList from '../answers/AnswerList'

var Question = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div className="container question">
          <h1>{this.props.title}</h1>
          <div className="col-sm-2 author">
            <div className="glyphicon glyphicon-user"></div>
            <div>{this.props.author}</div>
          </div>
          <div className="col-sm-10 top15">
            {this.props.body}
          </div>
        </div>
        <div className="border-bottom container">
          <h3 classname="col-md-offset-2">Answers</h3>
        </div>
        <AnswerList answers={this.props.answers} />
      </div>
    );
  }
});

module.exports = Question;

import React from 'react';
import _ from 'lodash';

import Answer from './Answer';
import AnswerForm from './AnswerForm';

var AnswerList = React.createClass({
  render: function () {
    var elements = [];

    _.each(this.props.answers, (answer, key) => {
      elements.push(
        <Answer {...answer} key={key} voteUp={this.props.voteUp}
                            voteDown={this.props.voteDown}/>
      );
    });

    return (
      <div className="clearfix answer-list col-sm-11 col-md-offset-1">
        {elements}
        <AnswerForm onAnswerSubmit={this.props.onAnswerSubmit} id={this.props.id}/>
      </div>
    );
  }
});

module.exports = AnswerList;

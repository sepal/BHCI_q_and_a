import React from 'react';
import _ from 'lodash';

import Answer from './Answer';

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
      </div>
    );
  }
});

module.exports = AnswerList;

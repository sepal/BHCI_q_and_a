import React from 'react';
import _ from 'lodash';

import QuestionTeaser from './QuestionTeaser';

class QuestionList extends React.Component {
  render() {
    var elements = [];

    if (this.props.questions.length > 0) {
      _.each(this.props.questions, (question) => {
        elements.push(<QuestionTeaser {...question} key={question.id} />);
      });
    } else {
      elements.push(<div className="text-center"><h2>No questions found.</h2></div>);
    }

    return (
      <div className="questions">
        {elements}
      </div>
    );
  }
}

module.exports = QuestionList;

import React from 'react';

class QuestionTeaser extends React.Component {
  render() {
    return (
      <div className="question question--teaser">
        <div className="question__title">
          {this.props.title}
        </div>
        <div className="question__stats">
          {this.props.stats}
        </div>
      </div>
    )
  }
};


module.exports = QuestionTeaser;

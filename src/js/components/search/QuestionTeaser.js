import React from 'react';

class QuestionTeaser extends React.Component {
  render() {
    return (
      <div className="question question--teaser">
        <div className="question__title col-md-8">
          <h2>{this.props.title}</h2>
        </div>
        <div className="question__stats col-md-4">
          <h3>{this.props.answers.length} answers</h3>
        </div>
      </div>
    );
  }
};


module.exports = QuestionTeaser;

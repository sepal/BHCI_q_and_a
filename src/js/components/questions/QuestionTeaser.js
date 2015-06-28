import React from 'react';

class QuestionTeaser extends React.Component {
  render() {
    var url = `question.html?question=${this.props.id}`;
    return (
      <div className="question question--teaser">
        <a href={url}>
          <div className="question__title col-md-8">
            <h3>{this.props.title}</h3>
          </div>
          <div className="question__stats col-md-4 top15">
            <h5>{this.props.answers.length} answers</h5>
          </div>
        </a>
      </div>
    );
  }
};


module.exports = QuestionTeaser;

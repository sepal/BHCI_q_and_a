import React from 'react';
import url from '../../utils/url'

class QuestionTeaser extends React.Component {
  render() {
    var link = url.create('question.html', {
      title: this.props.title,
      body: this.props.body,
      topic: this.props.topic
    });
    console.log(this.props);

    if (this.props.id != undefined)
      link = `question.html?question=${this.props.id}`;

    return (
      <div className="question question--teaser">
        <a href={link}>
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

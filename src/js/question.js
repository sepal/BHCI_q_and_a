import React from 'react';
import _ from 'lodash';
import Rx from 'rx-react';

import Question from './components/questions/Question';
import url from './utils/url';

var SlideApp = React.createClass({
  getInitialState: function () {
    return {
      questions: [],
      question: null,
      voted_answers: [],
    };
  },
  componentWillMount: function () {
    let parameters = url.getParams();

    $.ajax({
      url: "data/questions.json"
    }).done((data) => {
      this.setState({
        questions: data,
        question: data[parameters.question]
      });
    });
  },
  voteUp: function (options) {
    let voted_answers = this.state.voted_answers;

    if (this.state.voted_answers.indexOf(options.id) == -1) {
      let question = this.state.question;
      let questions = this.state.questions;

      question.answers[options.id].score++;
      questions[question.id] = question;

      voted_answers.push(options.id);

      this.setState({
        question: question,
        questions: questions,
        voted: true,
        voted_answers: voted_answers
      });
    }
  },
  voteDown: function (options) {
    let voted_answers = this.state.voted_answers;
    if (voted_answers.indexOf(options.id) == -1) {
      let question = this.state.question;
      let questions = this.state.questions;
      let voted_answers = this.state.voted_answers;

      question.answers[options.id].score--;
      questions[question.id] = question;

      voted_answers.push(options.id);


      this.setState({
        question: question,
        questions: questions,
        voted: true,
        voted_answers: voted_answers
      });
    }
  },
  addAnswer: function (answer) {
    if (answer.body != "") {
      let question = this.state.questions[answer.question_id];
      let questions = this.state.questions;

      answer['author'] = 'You';
      answer['id'] = questions.length;
      answer['score'] = 0;

      question.answers.push(answer);

      questions[question.id] = question;

      this.setState({
        question: question,
        questions: questions
      });
    }
  },
  render: function () {
    let content =
      <div className="container text-center">
        <h2>The requested question couldn't be found.</h2>
      </div>;
    if (this.state.question) {
      content =
        <div className="container-fluid container">
          <Question {...this.state.question} voteUp={this.voteUp}
                                             voteDown={this.voteDown}
                                             onAnswerSubmit={this.addAnswer}/>
        </div>
      ;
    }
    return (
      <div className="search-app">
        {content}
      </div>
    );
  }
});


React.render(
  <SlideApp />,
  $('#app').get(0)
);

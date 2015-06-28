import React from 'react';
import Rx from 'rx-react';
import _ from 'lodash';

import QuestionList from '../questions/QuestionList';
import QuestionForm from '../questions/QuestionForm';

var Slide = React.createClass({
  getInitialState: function () {
    return {
      showForm: false,
    };
  },
  componentWillMount: function () {
    var prevClick = Rx.FuncSubject.create();
    prevClick
      .map((event) => {
        return {
          slide: this.props.id - 1,
          parent: this.props.parent
        };
      })
      .subscribe(this.props.onSetSlide);

    var nextClick = Rx.FuncSubject.create();
    nextClick
      .map((event) => {
        return {
          slide: this.props.id + 1,
          parent: this.props.parent
        };
      })
      .subscribe(this.props.onSetSlide);

    var addClick = Rx.FuncSubject.create();
    addClick
      .map(true)
      .subscribe(this.showQuestionForm);

    var cancelClick = Rx.FuncSubject.create();
    cancelClick
      .map(false)
      .subscribe(this.showQuestionForm);

    this.handlers = {
      prevClick: prevClick,
      nextClick: nextClick,
      addClick: addClick,
      cancelClick: cancelClick
    }
  },
  showQuestionForm: function (showForm) {
    this.setState({
      showForm: showForm
    });
  },
  render: function () {
    var img_path = `data/slides/full/${this.props.filename}`;

    var questions = _.filter(this.props.questions, (question) => {
      if (question.topic == this.props.topic) {
        return question;
      }
    });

    var questionForm =
      <button className="btn btn-primary top20"
              onClick={this.handlers.addClick}>
        <span className="glyphicon glyphicon-plus"></span> Add question
      </button>;
    if (this.state.showForm) {
      questionForm =
        <QuestionForm onQuestionSubmit={this.props.onQuestionSubmit}
                      onCancel={this.handlers.cancelClick}/>;
    }

    return (
      <div className="slide container">
        <h1>{this.props.topic}</h1>

        <div className="slide__show container">
          <a href="javascript:void(0)" className="col-md-1 slide__controller"
             onClick={this.handlers.prevClick}>
            <span className="glyphicon glyphicon-menu-left"
                  aria-hidden="true"></span>
          </a>
          <img src={img_path} className="col-md-10"/>
          <a href="javascript:void(0)"
             className="col-md-1 text-right slide__controller"
             onClick={this.handlers.nextClick}>
            <span className="glyphicon glyphicon-menu-right"
                  aria-hidden="true"></span>
          </a>
        </div>
        <div className="question top20">
          <div className="clearfix">
            <h2>Questions</h2>
            {questionForm}
          </div>
          <QuestionList questions={questions}/>
        </div>
      </div>
    );
  }
});

module.exports = Slide;

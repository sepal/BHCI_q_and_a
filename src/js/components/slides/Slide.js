import React from 'react';
import Rx from 'rx-react';
import _ from 'lodash';

import QuestionList from '../questions/QuestionList';

var Slide = React.createClass({
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
    this.handlers = {
      prevClick: prevClick,
      nextClick: nextClick
    }
  },
  render: function () {
    var img_path = `data/slides/full/${this.props.filename}`;

    var questions = _.filter(this.props.questions, (question) => {
      if (question.topic == this.props.topic) {
        return question;
      }
    });

    return (
      <div className="slide container">
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
        <div className="question top30">
          <button className="btn btn-primary pull-right"><span className="glyphicon glyphicon-plus"></span> Add question</button>
          <h2>Questions</h2>
          <QuestionList questions={questions}/>
        </div>
      </div>
    );
  }
});

module.exports = Slide;

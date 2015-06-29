import React from 'react';
import _ from 'lodash';
import Rx from 'rx-react';

import Slide from './components/slides/Slide';
import url from './utils/url'

import questions from '../../data/questions';
import slides from '../../data/slides';

var SlideApp = React.createClass({
  getInitialState: function () {
    return {
      questions: [],
      slides: [],
      slide: null
    };
  },
  componentWillMount: function () {
    let parameters = url.getParams();

    this.setState({
      questions: questions,
      slides: slides,
      slide: slides[parameters['slide']]
    });
  },
  changeSlide: function (options) {
    if (options.slide >= 0 && options.slide < this.state.slides.length) {
      url.set('slide.html', {
        slide: options.slide
      });
    }
  },
  addQuestion: function (question) {
    var questions = this.state.questions;
    question['author'] = 'you';
    question['answers'] = [];

    questions.unshift(question);

    this.setState({
      questions: questions
    });
  },
  render: function () {
    return (
      <div className="search-app">
        <div className="container-fluid container">
          <Slide {...this.state.slide} questions={this.state.questions}
                                       onSetSlide={this.changeSlide}
                                       onQuestionSubmit={this.addQuestion}/>
        </div>
      </div>
    );
  }
});


React.render(
  <SlideApp />,
  $('#app').get(0)
);

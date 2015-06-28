import React from 'react';
import _ from 'lodash';
import Rx from 'rx-react';

import Slide from './components/slides/Slide';
import url from './utils/url'

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

    $.ajax({
      url: "data/questions.json"
    }).done((data) => {
      this.setState({
        questions: data
      });
    });

    $.ajax({
      url: "data/slides.json"
    }).done((data) => {
      this.setState({
        slides: data,
        slide: data[parameters['slide']]
      });
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
    question['id'] = this.state.questions.length;
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

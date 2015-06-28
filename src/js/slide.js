import React from 'react';
import _ from 'lodash';
import Rx from 'rx-react';

import Slide from './components/slides/Slide';

var SlideApp = React.createClass({
  getInitialState: function () {
    return {
      questions: [],
      slides: [],
      slide: null
    };
  },
  componentWillMount: function () {
    let parameters = {};
    let params = window.location.search.replace("?", "");
    params = params.split('&');

    for(let i in params) {
      let param = params[i].split('=');
      parameters[param[0]] = param[1];
    }

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
  changeSlide: function(options) {
    if (options.slide >= 0 && options.slide < this.state.slides.length) {
      window.location = `slide.html?slide=${options.slide}`;
    }
  },
  render: function () {
    return (
      <div className="search-app">
        <div className="container-fluid container">
          <Slide {...this.state.slide} questions={this.state.questions} onSetSlide={this.changeSlide} />
        </div>
      </div>
    );
  }
});


React.render(
  <SlideApp />,
  $('#app').get(0)
);

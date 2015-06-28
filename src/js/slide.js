import React from 'react';
import _ from 'lodash';

import Slide from './components/slides/Slide';

var SlideApp = React.createClass({
  getInitialState: function () {
    return {
      questions: [],
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
        slide: data[parameters['slide']]
      });
    });
  },
  render: function () {
    return (
      <div className="search-app">
        <div className="container-fluid container">
          <Slide {...this.state.slide} questions={this.state.questions} />
        </div>
      </div>
    );
  }
});


React.render(
  <SlideApp />,
  $('#app').get(0)
);

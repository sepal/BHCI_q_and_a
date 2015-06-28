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
  render: function () {
    return (
      <div className="search-app">
        <div className="container-fluid container">
          <Question {...this.state.question} />
        </div>
      </div>
    );
  }
});


React.render(
  <SlideApp />,
  $('#app').get(0)
);

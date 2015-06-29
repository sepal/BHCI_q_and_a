import React from 'react';
import Slides from './components/slides/Slides.js';

import questions from '../../data/questions';
import slides from '../../data/slides';

var SlidesApp = React.createClass({
  getInitialState: function () {
    return {
      slides: []
    };
  },
  componentWillMount: function () {
    this.setState({
      slides: slides
    });
  },
  render: function() {
    return (
      <Slides slides={this.state.slides}/>
    );
  }
});

React.render(
  <SlidesApp />,
  $('#app').get(0)
);

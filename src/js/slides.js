import React from 'react';
import Slides from './components/slides/Slides.js';

var SlidesApp = React.createClass({
  getInitialState: function () {
    return {
      slides: []
    };
  },
  componentWillMount: function () {
    $.ajax({
      url: "data/slides.json"
    }).done((data) => {
      this.setState({
        slides: data
      });
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

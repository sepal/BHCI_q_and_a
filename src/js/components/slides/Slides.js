import React from 'react';
import _ from 'lodash';

import SlideList from './SlideList';

var Slides = React.createClass({
  getInitialState: function() {
    return {
      slide_groups: []
    }
  },
  componentDidMount: function() {
    this.updateGroups(this.props.slides);
  },
  updateGroups: function(slides) {
    let topics = [];
    let groups = {};

    _.forEach(slides, (slide) => {
      if (topics.indexOf(slide.topic) == -1) {
        topics.push(slide.topic);
        groups[slide.topic] = {
          topic: slide.topic,
          slides: []
        };
      }

      groups[slide.topic].slides.push(slide);
    });

    this.setState({
      slide_groups: groups
    });
  },
  render: function() {
    var elements = [];
    _.forEach(this.state.slide_groups, (group) => {
      elements.push(
        <div className="container">
          <h2>{group.topic}</h2>
          <SlideList slides={group.slides} onSetSlide={this.props.onSetSlide} parent="slides" />
        </div>
      );
    });
    return (
      <div>
        {elements}
      </div>
    );
  }
});

module.exports = Slides;

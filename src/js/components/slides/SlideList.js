import React from 'react';
import _ from 'lodash';

import SlideTeaser from './SlideTeaser';

class SlideList extends React.Component {
  render() {
    var elements = [];
    if (this.props.slides != undefined && this.props.slides.length > 0) {
      _.each(this.props.slides, (slide) => {
        elements.push(
          <SlideTeaser {...slide} key={slide.id} onSetSlide={this.props.onSetSlide} parent={this.props.parent}/>
        );
      });
    } else {
      elements.push(
        <div className="text-center">
          <h2>No slides found.</h2>
        </div>);
    }

    return (
      <div className="slides">
        {elements}
      </div>
    );
  }
}

module.exports = SlideList;

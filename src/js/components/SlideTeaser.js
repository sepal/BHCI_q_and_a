import React from 'react';

class SlideTeaser extends React.Component {
  render() {
    var img_path = `data/slides/thumb/${this.props.filename}`;
    return (
      <div className="slide slide--teaser">
        <img src={img_path} title={`Slide Nr. ${this.props.id}`} />
      </div>
    );
  }
}

module.exports = SlideTeaser;

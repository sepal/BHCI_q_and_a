import React from 'react';

class SlideTeaser extends React.Component {
  render() {
    var img_path = `data/slides/thumb/${this.props.filename}`;
    return (
      <div className="slide slide--teaser col-md-4 top17">
        <img src={img_path} title={`Slide Nr. ${this.props.id}`} />
      </div>
    );
  }
}

module.exports = SlideTeaser;

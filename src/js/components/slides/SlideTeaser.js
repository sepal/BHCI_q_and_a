import React from 'react';
import Rx from 'rx-react';

class SlideTeaser extends React.Component {
  componentWillMount() {
    var slideClick = Rx.FuncSubject.create();
    slideClick
      .map((e) => {
        return {
          slide: this.props.id,
          props: this.props.parent
        };
      })
      .subscribe(this.props.onSetSlide);

    this.handlers = {
      slideClick: slideClick
    }
  }

  render() {
    var img_path = `data/slides/thumb/${this.props.filename}`;
    return (
      <div className="slide slide--teaser col-md-4 top17"
           onClick={this.handlers.slideClick}
           data-slide={this.props.id}>
        <img src={img_path} title={`Slide Nr. ${this.props.id}`}/>
      </div>
    );
  }
}

module.exports = SlideTeaser;

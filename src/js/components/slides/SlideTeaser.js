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
    var url = `slide.html?slide=${this.props.id}`;
    return (
      <div className="slide slide--teaser col-sm-4 col-xs-6 top17"
           onClick={this.handlers.slideClick}
           data-slide={this.props.id}>
        <a href={url}>
          <img src={img_path} title={`Slide Nr. ${this.props.id}`}/>
        </a>
      </div>
    );
  }
}

module.exports = SlideTeaser;

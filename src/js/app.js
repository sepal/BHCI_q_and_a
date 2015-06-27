import React from 'react';
import Navigation from './components/navigation/navigation';
import Search from './components/search/Search';
import Slides from './components/slides/Slides';

var App = React.createClass({
  getInitialState: function () {
    return {
      questions: [],
      slides: [],
      page: 'search',
      slide: 0
    }
  },
  componentWillMount: function () {
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
        slides: data
      });
    });
  },
  handlePageChange: function (page) {
    this.setState({
      page: page
    });
  },
  setSlide: function (options) {
    this.setState({
      page: 'slide',
      slide: options.slide
    });
  },
  render: function () {
    var content = null;
    if (this.state.page == "search") {
      content = <Search onPageChange={this.handlePageChange}
                        questions={this.state.questions}
                        slides={this.state.slides} />
    } else if (this.state.page == 'slides') {
      content = <Slides onSetSlide={this.setSlide}
                        slides={this.state.slides} />
    } else if (this.state.page == 'slide') {
      content = <div>{this.state.slide}</div>
    }

    return (
      <div className="app">
        <Navigation onPageChange={this.handlePageChange}/>

        <div className="container-fluid container">
          {content}
        </div>
      </div>
    );
  }
});


React.render(
  <App />,
  $('#app').get(0)
);

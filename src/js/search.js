import React from 'react';
import Search from './components/search/Search';
import Slides from './components/slides/Slides';
import Slide from './components/slides/Slide';

var SearchApp = React.createClass({
  getInitialState: function () {
    return {
      questions: [],
      slides: [],
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
  render: function () {
    var content = null;

    return (
      <div className="search-app">
        <div className="container-fluid container">
          <Search onPageChange={this.handlePageChange}
                  questions={this.state.questions}
                  slides={this.state.slides} onSetSlide={this.setSlide}/>
        </div>
      </div>
    );
  }
});


React.render(
  <SearchApp />,
  $('#app').get(0)
);

import React from 'react';
import Rx from 'rx-react';
import _ from 'lodash';

import SearchResult from './SearchResult';

const ENTER_KEY = 13;

var Search = React.createClass({
  mixins: [Rx.RxLifecycleMixin],
  getInitialState: function () {
    return {
      search: "",
      questions: [],
      slides: [],
      questions_filtered: [],
      slides_filtered: []
    };
  },
  componentWillMount: function () {
    $.ajax({
      url: "data/questions.json"
    }).done((data) => {
      this.setState({
        questions: data,
        questions_filtered: data
      });
    });
    $.ajax({
      url: "data/slides.json"
    }).done((data) => {
      this.setState({
        slides: data,
        slides_filtered: data
      });
      });
      var setState = this.setState.bind(this);

    var searchClick = Rx.FuncSubject.create();
    searchClick.subscribe(this.submitSearch);

    var searchKeyDown = Rx.FuncSubject.create();
    searchKeyDown
      .filter((event) => {
        return event.keyCode === ENTER_KEY;
      })
      .subscribe(this.submitSearch);

    var searchChanged = Rx.FuncSubject.create();
    searchChanged
      .map((e) => {
        return {
          search: e.target.value
        };
      })
      .subscribe(setState);

    this.handlers = {
      searchClick: searchClick,
      searchChanged: searchChanged,
      searchKeyDown: searchKeyDown
    };
  },
  submitSearch(event) {
    let val = this.state.search.trim();
    if (val) {
      let questions = _.filter(this.state.questions, (question) => {
        var re = new RegExp(val, "gi");
        // Simulate a fulltext search.
        if (question.title.match(re) || question.body.match(re) || question.author.match(re)) {
          return question;
        }
      });

      let slides = _.filter(this.state.slides, (slide) => {
        var re = new RegExp(val, "gi");
        // Simulate a fulltext search.
        if (slide.topic.match(re) || slide.body.match(re)) {
          return slide;
        }
      });

      this.setState({
        questions_filtered: questions,
        slides_filtered: slides
      });
    } else if (val == "") {
      this.setState({
        questions_filtered: this.state.questions,
        slides_filtered: this.state.slides
      });
    }
  },
  render: function () {
    return (
      <div className="search search--main top30">
        <div className="input-group col-md-12">
          <input type="text" className="form-control input-lg"
                 onChange={this.handlers.searchChanged}
                 onKeyDown={this.handlers.searchKeyDown}
                 placeholder="Search questions or slides..."/>
          <span className="input-group-btn">
              <button className="btn btn-info btn-lg" type="button"
                      onClick={this.handlers.searchClick}>
                <i className="glyphicon glyphicon-search"></i>
              </button>
          </span>
        </div>

        <SearchResult className="top30"
                      questions={this.state.questions_filtered}
                      slides={this.state.slides_filtered}/>
      </div>

    );
  }
});

module.exports = Search;

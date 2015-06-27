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
      questions_filtered: this.props.questions,
      slides_filtered: this.props.slides
    };
  },
  componentWillMount: function () {
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
  componentWillReceiveProps(nextProps) {
    if (this.state.search == "") {
      this.setState({
        questions_filtered: nextProps.questions,
        slides_filtered: nextProps.slides
      });
    }
  },
  submitSearch(event) {
    let val = this.state.search.trim();
    if (val) {
      let questions = _.filter(this.props.questions, (question) => {
        var re = new RegExp(val, "gi");
        // Simulate a fulltext search.
        if (question.title.match(re) || question.body.match(re) || question.author.match(re)) {
          return question;
        }
      });

      let slides = _.filter(this.props.slides, (slide) => {
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
        questions_filtered: this.props.questions,
        slides_filtered: this.props.slides
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

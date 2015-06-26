import React from 'react';
import Rx from 'rx-react';
import SearchResult from './SearchResult';

class Search extends React.Component {
  constructor(props) {
    super(props);
    var setState = this.setState.bind(this);

    var searchClick = Rx.EventHandler.create();
    searchClick
      .subscribe(this.handleSearch);

    var searchChanged = Rx.EventHandler.create();
    searchChanged.map((e) => {
      this.state.search = e.target.value;
      return this.state;
    })
      .subscribe(setState);

    this.handlers = {
      searchClick: searchClick,
      searchChanged: searchChanged
    };

    this.state = {
      search: "",
      results: {
        questions: [],
        answers: []
      }
    };
  }

  handleSearch(event) {
    console.log(this.state.search);
  }

  render() {
    return (
      <div className="search search--main top30">
        <div className="input-group col-md-12">
          <input type="text" className="form-control input-lg"
                 onChange={this.handlers.searchChanged}
                 placeholder="Search questions or slides..."/>
          <span className="input-group-btn">
              <button className="btn btn-info btn-lg" type="button"
                      onClick={this.handlers.searchClick}>
                <i className="glyphicon glyphicon-search"></i>
              </button>
          </span>
        </div>

        <SearchResult className="top30" term={this.state.term}
                      results={this.state.results}/>
      </div>

    );
  }
}

module.exports = Search;

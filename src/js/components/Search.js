import React from 'react';

import SearchResult from './SearchResult';

class Search extends React.Component {
  render() {
    return (
      <div className="search search--main top30 ">
        <div className="input-group col-md-12">
          <input type="text" className="form-control input-lg"
                 placeholder="Search questions or slides..."/>
          <span className="input-group-btn">
              <button className="btn btn-info btn-lg" type="button">
                <i className="glyphicon glyphicon-search"></i>
              </button>
          </span>
        </div>

        <SearchResult className="top30" term={this.term} />
      </div>

    );
  }
}

module.exports = Search;

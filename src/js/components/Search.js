import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div className="search--main">
        <div className="input-group col-md-12">
          <input type="text" className="form-control input-lg"
                 placeholder="Search questions or slides..."/>
          <span className="input-group-btn">
              <button className="btn btn-info btn-lg" type="button">
                <i className="glyphicon glyphicon-search"></i>
              </button>
          </span>
        </div>
      </div>
    );
  }
}

module.exports = Search;

import React from 'react';

class Slide extends React.Component {
  render() {
    return (
      <div className="search">
        <div class="input-group col-md-12">
          <input type="text" class="form-control input-lg"
                 placeholder="Search questions or slides..."/>
          <span class="input-group-btn">
              <button class="btn btn-info btn-lg" type="button">
                <i class="glyphicon glyphicon-search"></i>
              </button>
          </span>
        </div>
      </div>
    );
  }
}

module.exports = Slide;

import React from 'react';

var AnswerForm = React.createClass({
  render: function() {
    return (
      <div className="clearfix top15">
        <div className="col-sm-1 author">
          <div className="">
            <span className="glyphicon glyphicon-user"></span>
          </div>
          <div>{this.props.author}</div>
        </div>
        <div className="col-sm-10 top20">
          <textarea className="form-control" rows="3"></textarea>
          <button type="submit" className="btn btn-primary top15">Submit</button>
        </div>
      </div>
    );
  }
});

module.exports = AnswerForm;

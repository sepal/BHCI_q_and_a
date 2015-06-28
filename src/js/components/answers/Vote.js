import React from 'react';
import Rx from 'rx-react';

var Vote = React.createClass({
  componentWillMount: function () {
    var voteUpClick = Rx.FuncSubject.create();
    voteUpClick
      .map((e) => {
        return {
          id: this.props.id
        };
      })
      .subscribe(this.props.voteUp);

    var voteDownClick = Rx.FuncSubject.create();
    voteDownClick
      .map((e) => {
        return {
          id: this.props.id
        };
      })
      .subscribe(this.props.voteDown);

    this.handlers = {
      voteUpClick: voteUpClick,
      voteDownClick: voteDownClick
    }
  },
  render: function() {
    return (
      <div className="vote">
        <a href="javascript:void(0)" onClick={this.handlers.voteUpClick}>
          <span className="glyphicon glyphicon-triangle-top"></span>
        </a>
        <div>{this.props.score}</div>
        <a href="javascript:void(0)" onClick={this.handlers.voteDownClick}>
          <span className="glyphicon glyphicon-triangle-bottom"></span>
        </a>
      </div>
    );
  }
});

module.exports = Vote;

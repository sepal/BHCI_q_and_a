import React from 'react';
import Vote from './Vote';


var Answer = React.createClass({
  render: function () {
    return (
      <div className="clearfix top15">
        <div className="col-sm-1 author">
          <div className="">
            <span className="glyphicon glyphicon-user"></span>
          </div>
          <div>{this.props.author}</div>
        </div>
        <div className="col-sm-1">
          <Vote score={this.props.score} voteUp={this.props.voteUp}
                voteDown={this.props.voteDown} id={this.props.id}/>
        </div>
        <div className="col-sm-10 top20">
          {this.props.body}
        </div>
      </div>
    );
  }
});

module.exports = Answer;

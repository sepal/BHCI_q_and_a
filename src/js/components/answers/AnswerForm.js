import React from 'react';
import Rx from 'rx-react';

var AnswerForm = React.createClass({
  getInitialState: function () {
    return {
      answer: ""
    };
  },
  componentWillMount: function () {
    var setState = this.setState.bind(this);

    var answerSubmit = Rx.FuncSubject.create();
    answerSubmit
      .map((e) => {
        return {
          question_id: this.props.id,
          body: this.state.body
        }
      })
      .subscribe(this.props.onAnswerSubmit);

    var answerChanged = Rx.FuncSubject.create();
    answerChanged
      .map((e) => {
        return {
          body: e.target.value
        };
      })
      .subscribe(setState);
    this.handlers = {
      answerSubmit: answerSubmit,
      answerChanged: answerChanged
    }
  },
  render: function () {
    return (
      <div className="clearfix top15">
        <div className="col-sm-1 author">
          <div className="">
            <span className="glyphicon glyphicon-user"></span>
          </div>
          <div>You</div>
        </div>
        <div className="col-sm-10 top20">
          <textarea className="form-control" rows="3"
                    onChange={this.handlers.answerChanged}
                    placeholder="Enter your answer..."></textarea>
          <button type="submit" className="btn btn-primary top15"
                  onClick={this.handlers.answerSubmit}>Submit
          </button>
        </div>
      </div>
    );
  }
});

module.exports = AnswerForm;

import React from 'react';
import Rx from 'rx-react';

var QuestionForm = React.createClass({
  getInitialState: function () {
    return {
      title: "",
      body: ""
    };
  },
  componentWillMount: function () {
    var setState = this.setState.bind(this);

    var questionSubmit = Rx.FuncSubject.create();
    questionSubmit
      .map((e) => {
        return {
          title: this.state.title,
          body: this.state.body
        }
      })
      .subscribe(this.props.onQuestionSubmit);

    var bodyChanged = Rx.FuncSubject.create();
    bodyChanged
      .map((e) => {
        return {
          body: e.target.value
        };
      })
      .subscribe(setState);

    var titleChanged = Rx.FuncSubject.create();
    titleChanged
      .map((e) => {
        return {
          title: e.target.value
        };
      })
      .subscribe(setState);

    this.handlers = {
      questionSubmit: questionSubmit,
      bodyChanged: bodyChanged,
      titleChanged: titleChanged
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
          <div className="form-group">
            <input type="text" className="form-control"
                   onChange={this.handlers.titleChanged}
                   placeholder="Enter a title..."/>
            <textarea className="form-control top15" rows="3"
                      onChange={this.handlers.bodyChanged}
                      placeholder="Enter your question..."></textarea>
          </div>
          <button onClick={this.props.onCancel} className="btn btn-default">Cancel</button>&nbsp;
          <button type="submit" className="btn btn-primary"
                  onClick={this.handlers.questionSubmit}>Submit
          </button>
        </div>
      </div>
    );
  }
});

module.exports = QuestionForm;

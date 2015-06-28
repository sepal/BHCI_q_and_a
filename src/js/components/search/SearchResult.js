import React from 'react';
import Bootstrap from 'react-bootstrap'

import QuestionList from './../questions/QuestionList';
import SlideList from './../slides/SlideList';

var TabbedArea = Bootstrap.TabbedArea;
var TabPane = Bootstrap.TabPane;

class SearchResult extends React.Component {
  render() {
    var classes = this.props.className;

    classes += " search__result container-fluid";

    return (
      <div className={classes}>
        <TabbedArea defaultActiveKey={1}>
          <TabPane eventKey={1} tab='Questions'>
            <QuestionList questions={this.props.questions} showForm={false}/>
          </TabPane>
          <TabPane eventKey={2} tab='Slides'>
            <SlideList slides={this.props.slides}
                       onSetSlide={this.props.onSetSlide}/>
          </TabPane>
        </TabbedArea>
      </div>
    );
  }
}

module.exports = SearchResult;

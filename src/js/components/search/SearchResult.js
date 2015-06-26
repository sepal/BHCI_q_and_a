import React from 'react';
import Bootstrap from 'react-bootstrap'

import SearchQuestions from './SearchQuestions';
import SearchSlides from './SearchSlides';

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
            <SearchQuestions questions={this.props.questions} />
          </TabPane>
          <TabPane eventKey={2} tab='Slides'>
            <SearchSlides slides={this.props.slides} />
          </TabPane>
        </TabbedArea>
      </div>
    );
  }
}

module.exports = SearchResult;

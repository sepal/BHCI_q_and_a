import React from 'react';
import Rx from 'rx-react';
import Bootstrap from 'react-bootstrap';
import Search from '../search/Search.js';
import Slides from '../slides/Slides';

var Nav = Bootstrap.Nav;
var Navbar = Bootstrap.Navbar;
var NavItem = Bootstrap.NavItem;

var Navigation = React.createClass({
  componentWillMount: function () {
    var setState = this.setState.bind(this);
    var searchClick = Rx.FuncSubject.create();
    searchClick.subscribe(this.switchToSearch);

    var slideClick = Rx.FuncSubject.create();
    slideClick.subscribe(this.switchToSlide);

    this.handlers = {
      searchClick: searchClick,
      slideClick: slideClick
    };
  },
  switchToSearch: function() {
    this.props.onPageChange('search');
  },
  switchToSlide: function() {
    this.props.onPageChange('slides');
  },
  render: function () {
    return (
      <div className="app">
        <Navbar brand={<a href="#">Aurora</a>}>
          <Nav>
            <NavItem eventKey={1} href='javascript:void(0)' onClick={this.handlers.searchClick}>Search</NavItem>
            <NavItem eventKey={2} href='javascript:void(0)' onClick={this.handlers.slideClick}>Slides</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
});

module.exports = Navigation;

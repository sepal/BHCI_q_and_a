import React from 'react';
import Rx from 'rx-react';
import Bootstrap from 'react-bootstrap';
import Search from '../search/Search.js';

var Nav = Bootstrap.Nav;
var Navbar = Bootstrap.Navbar;
var NavItem = Bootstrap.NavItem;

var Navigation = React.createClass({
  getInitialState: function () {
    return {
      active: 1
    };
  },
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
    this.setState({
      active: 1
    });
  },
  switchToSlide: function() {
    this.setState({
      active: 2
    });
  },
  render: function () {
    var content = <Search />;
    if (this.state.active == 2) {
      content = null;
    }

    return (
      <div className="app">
        <Navbar brand={<a href="#">Aurora</a>}>
          <Nav>
            <NavItem eventKey={1} href='javascript:void(0)' onClick={this.handlers.searchClick}>Search</NavItem>
            <NavItem eventKey={2} href='javascript:void(0)' onClick={this.handlers.slideClick}>Slides</NavItem>
          </Nav>
        </Navbar>
        <div className="container-fluid container">
          {content}
        </div>
      </div>
    );
  }
});

module.exports = Navigation;

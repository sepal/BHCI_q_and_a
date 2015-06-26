import React from 'react';
import Search from './components/Search';

var results = {
  questions: [],
  answers: []
};

React.render(
  <Search term=""  results={results} />,
 $('#app--body').get(0)
);

import React from 'react';
import ReactDOM from 'react-dom';

import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

import Home from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});

it('match on Shallow mode', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Home />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
})


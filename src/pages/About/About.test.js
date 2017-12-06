import React from 'react';
import ReactDOM from 'react-dom';

import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

import About from './About';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
});

it('match on Shallow mode', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<About />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
})


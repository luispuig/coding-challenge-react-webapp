import React from 'react';
import ReactDOM from 'react-dom';

import ShallowRenderer from 'react-test-renderer/shallow'; // ES6


import City from './City';

const initialProps = {
  id: 123,
  name: "CityName",
  state: "success",
  temperature: 20
};



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<City {...initialProps} />, div);
});

it('match on Shallow mode for REQUEST', () => {
  const props = {...initialProps, state: "request" }
  const renderer = new ShallowRenderer();
  renderer.render(<City {...props} />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it('match on Shallow mode for SUCCESS', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<City {...initialProps} />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it('match on Shallow mode for SUCCESS. temperatire undefined', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<City {...initialProps }  />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it('match on Shallow mode for ERROR WITHOUT MESSAGE', () => {
  const props = {...initialProps, state: "fail" };
  const renderer = new ShallowRenderer();
  renderer.render(<City {...props} />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it('match on Shallow mode for ERROR WITH MESSAGE', () => {
  const props = {...initialProps, state: "fail", error:"Error message" }
  const renderer = new ShallowRenderer();
  renderer.render(<City {...props} />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it('match on Shallow mode for NO STATE', () => {
  const props = {...initialProps, state: "NO-STATE", error:"Error message" }
  const renderer = new ShallowRenderer();
  renderer.render(<City {...props} />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

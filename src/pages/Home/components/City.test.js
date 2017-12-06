import React from 'react';
import ReactDOM from 'react-dom';

import ShallowRenderer from 'react-test-renderer/shallow'; // ES6


import City from './City';

const initialProps =
    {
      id: 123,
      name: "CityName",
      state: "success",
      temperature: 20
    }


const  temperatures = [
  {id:3936456,  temperature:15.45,  date: new Date('2017-12-06T10:57:16.462Z')},
  {id:3448439,  temperature:22.06,  date: new Date('2017-12-06T10:57:16.449Z')},
  {id:3871336,  temperature:12,     date:new Date('2017-12-06T10:57:16.438Z')}
];


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<City {...initialProps} temperatures={temperatures}/>, div);
});

it('match on Shallow mode for REQUEST', () => {
  const props = {...initialProps, state: "request" }
  const renderer = new ShallowRenderer();
  renderer.render(<City {...props} temperatures={temperatures}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it('match on Shallow mode for SUCCESS', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<City {...initialProps} temperatures={temperatures}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it('match on Shallow mode for SUCCESS. temperatire undefined', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<City {...initialProps } temperature={undefined} temperatures={temperatures}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it('match on Shallow mode for ERROR WITHOUT MESSAGE', () => {
  const props = {...initialProps, state: "fail" }
  const renderer = new ShallowRenderer();
  renderer.render(<City {...props} temperatures={temperatures}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it('match on Shallow mode for ERROR WITH MESSAGE', () => {
  const props = {...initialProps, state: "fail", error:"Error message" }
  const renderer = new ShallowRenderer();
  renderer.render(<City {...props} temperatures={temperatures}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it('match on Shallow mode for NO STATE', () => {
  const props = {...initialProps, state: "NO-STATE", error:"Error message" }
  const renderer = new ShallowRenderer();
  renderer.render(<City {...props} temperatures={temperatures}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

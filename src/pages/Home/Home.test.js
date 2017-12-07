import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';

import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
configure({ adapter: new Adapter() });


import Home from './Home';


const initialData = { temperature: 0, state: 'request', error: undefined  };
const testState = {
  cities: [
    { id: 3871336, name: "Santiago",      ...initialData },
    { id: 3435910, name: "Buenos Aires",  ...initialData },
    { id: 3936456, name: "Lima",          ...initialData },
    { id: 3448439, name: "Sao Paulo",     ...initialData }
  ],
  cities_temperatures: [
    { id:3871336, date: new Date('2017-12-06T14:14:58.080Z'), temperature: 25 },
    { id:3435910, date: new Date('2017-12-07T14:14:58.080Z'), temperature: 26 },
    { id:3936456, date: new Date('2017-12-08T14:14:58.080Z'), temperature: 27 },
    { id:3448439, date: new Date('2017-12-09T14:14:58.080Z'), temperature: 28 },
  ]
};

const store = createMockStore(testState);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Home /></Provider>, div);
});

it('match on Shallow mode', () => {
  const component = mount(<Provider store={store}><Home /></Provider>, store);
  const tree = shallowToJson(component, {mode: 'shalow'});
  expect(tree).toMatchSnapshot();
});


it('should start fetching', () => {
  jest.useFakeTimers();

  const cityUpdateAll_Mock = jest.fn();

  const component = mount(<Provider store={store}><Home cityUpdateAll={cityUpdateAll_Mock} /></Provider>, store);

  expect(cityUpdateAll_Mock.mock.calls.length).toBe(1); // Start Fetching con ComponentDidMount();

  // Run timer
  jest.runOnlyPendingTimers();
  expect(cityUpdateAll_Mock.mock.calls.length).toBe(2); // Fetching on tic timer();

  // unmount component
  component.unmount();

  // Run timer
  jest.runOnlyPendingTimers();
  expect(cityUpdateAll_Mock.mock.calls.length).toBe(2); // NO Fetching on tic timer();

  jest.clearAllTimers();
});

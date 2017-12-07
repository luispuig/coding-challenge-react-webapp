import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import { shallowToJson } from 'enzyme-to-json';
configure({ adapter: new Adapter() });


import App from './App';

const initialData = { temperature: 0, state: 'request', error: undefined  };
const cities = [
  { id: 3871336, name: "Santiago",      ...initialData },
  { id: 3435910, name: "Buenos Aires",  ...initialData },
  { id: 3936456, name: "Lima",          ...initialData },
  { id: 3448439, name: "Sao Paulo",     ...initialData }
];

const testState = {
  cities,
  citiesTemperatures: []
};

const store = createMockStore(testState);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});

it('match on Shallow mode', () => {
  const component = shallowWithStore(<App />, store);

  const tree = shallowToJson(component, {mode: 'deep'});
  expect(tree).toMatchSnapshot();

});

import {
  CITY_UPDATE__REQUEST,
  CITY_UPDATE__FAIL,
  CITY_UPDATE__SUCCESS
} from "./actions";
import reducer from "./reducer";

it('Reducer other action', async () => {

  const action = {
    type: "NO-ACTION"
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();

});

it('Reducer other action: CITY_UPDATE__REQUEST', async () => {

  const action = {
    type: CITY_UPDATE__REQUEST,
    payload: { id: 3871336 }
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();

});

it('Reducer other action: CITY_UPDATE__SUCCESS', async () => {

  const action = {
    type: CITY_UPDATE__SUCCESS,
    payload: { id: 3871336, temperature: 25 }
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();

});

it('Reducer other action: CITY_UPDATE__FAIL', async () => {

  const action = {
    type: CITY_UPDATE__FAIL,
    payload: { id: 3871336, error: "error message" }
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();

});

it('Reducer other action: CITY_UPDATE__FAIL-undefined', async () => {

  const action = {
    type: CITY_UPDATE__FAIL,
    payload: { id: 3871336, error: undefined }
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();

});

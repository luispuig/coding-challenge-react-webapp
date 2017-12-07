import {
  CITY_TEMPERATURE__ADD
} from "./actions";
import reducer from "./reducer";

it('Reducer other action', async () => {

  const action = {
    type: "NO-ACTION"
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();

});

it('Reducer other action: CITY_TEMPERATURE__ADD', async () => {

  const action = {
    type: CITY_TEMPERATURE__ADD,
    payload: { id: 3871336, temperature: 25 }
  };
  const state = reducer(undefined, action);
  expect(state).toMatchSnapshot();

});

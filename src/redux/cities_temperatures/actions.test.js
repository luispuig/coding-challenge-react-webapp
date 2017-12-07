import * as actions from "./actions";

it('Creates Action cityTemperature_Add', () => {
  const action = actions.cityTemperature_Add({ id:3871336, date: new Date('2017-12-06T14:14:58.080Z'), temperature: 25 })
  expect(action).toMatchSnapshot();
});

import * as actions from "./actions";

it('Creates Actions cityUpdateAll', async () => {
  const response = { main: { temp: 25 } };
  window.fetch = jest.fn().mockImplementation( () => Promise.resolve( { json: () => response } ) );

  const action = actions.cityUpdateAll();
  const dispatchMock = jest.fn() ;
  const initialData = { temperature: 0, state: 'request', error: undefined  };
  const cities = [
    { id: 3871336, name: "Santiago",      ...initialData },
    { id: 3435910, name: "Buenos Aires",  ...initialData },
    { id: 3936456, name: "Lima",          ...initialData },
    { id: 3448439, name: "Sao Paulo",     ...initialData }
  ];

  // Dispach Actions and Get Array of Action Creators
  action(dispatchMock, () => ({cities}) );

  const dispatchMock2 = jest.fn() ;
  dispatchMock.mock.calls.map( async actionCreator => {
    const fn = actionCreator[0];
    //console.log(fn.toString());
    // Call each cityUpdate action creator
    fn(dispatchMock2);

  });

  // Result of calling every cityUpdate action creator
  const finalActions = dispatchMock2.mock.calls;

  expect(finalActions).toMatchSnapshot();
});


it('Creates Action cityUpdate', async () => {

  const response = { main: { temp: 25 } };
  window.fetch = jest.fn().mockImplementation( () => Promise.resolve( { json: () => response } ) );

  const action = actions.cityUpdate({ id: 3871336}, new Date('2017-12-06T14:14:58.080Z'));
  const dispatchMock = jest.fn() ;

  // Dispach Actions
  const apiCallPromise = action(dispatchMock);
  await apiCallPromise;

  expect(dispatchMock.mock.calls).toMatchSnapshot();

});

it('Creates Action cityUpdate-ERROR', async () => {

  const response = { cod: 404, message: "error" };
  window.fetch = jest.fn().mockImplementation( () => Promise.resolve( { json: () => response } ) );

  const action = actions.cityUpdate({ id: 3871336}, new Date('2017-12-06T14:14:58.080Z'));
  const dispatchMock = jest.fn() ;

  // Dispach Actions
  const apiCallPromise = action(dispatchMock);
  await apiCallPromise;

  expect(dispatchMock.mock.calls).toMatchSnapshot();

});


it('Creates Action cityUpdate_Request', () => {
  const action = actions.cityUpdate_Request({ id: 123 })
  expect(action).toMatchSnapshot();
});

it('Creates Action cityUpdate_Fail', () => {
  const action = actions.cityUpdate_Fail({ id: 123, error: "error message" })
  expect(action).toMatchSnapshot();
});

it('Creates Action cityUpdate_Success', () => {
  const action = actions.cityUpdate_Success({ id: 123, temperature:15 })
  expect(action).toMatchSnapshot();
});

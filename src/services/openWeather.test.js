import openWeather from "./openWeather";

it('Loads data', async () => {

  const response = { main: { temp: 25 } };
  window.fetch = jest.fn().mockImplementation( () => Promise.resolve( { json: () => response } ) );

  const result = await openWeather.getTempByCityId(123);

  expect(result).toMatchSnapshot();

});

it('Loads data fail', async () => {

  const response = { cod: 404, message: "error message" };
  window.fetch = jest.fn().mockImplementation( () => Promise.resolve( { json: () => response } ) );

  let result;
  try {
    result = await openWeather.getTempByCityId(123);

  } catch (error) {
    result = error.message;
  }

  expect(result).toMatchSnapshot();

});

it('Loads data error', async () => {

  const response = { };
  window.fetch = jest.fn().mockImplementation( () => Promise.resolve( { json: () => response } ) );

  let result;
  try {
    result = await openWeather.getTempByCityId(123);

  } catch (error) {
    result = error.message;
  }
  expect(result).toMatchSnapshot();

});

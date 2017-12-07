import store from "./store";

it('Gets store object', async () => {

  expect(store).toMatchSnapshot();

});

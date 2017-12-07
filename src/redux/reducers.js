// @flow
import { combineReducers } from "redux";

import cities from "./cities/reducer";
import cities_temperatures from "./cities_temperatures/reducer";


export default combineReducers({
  cities,
  cities_temperatures
});

// @flow

import {
  CITY_TEMPERATURE__ADD
} from "./actions";

import type { _Temperature, _ActionPayload} from "./types"

const initialState:Array<_Temperature> = [];

const reducer = (state:Array<_Temperature> = initialState, action:_ActionPayload) => {
  switch (action.type) {
    case CITY_TEMPERATURE__ADD:
      /* Add New Temperature to the batch */
      return [action.payload, ...state]; // Last value first

    default:
      return state;
  }
};

export default reducer;

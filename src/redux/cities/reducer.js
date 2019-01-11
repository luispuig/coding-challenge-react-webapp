// @flow
import {
  CITY_UPDATE__REQUEST,
  CITY_UPDATE__FAIL,
  CITY_UPDATE__SUCCESS
} from "./actions";

import type { _City, _ActionPayload } from "./types";

const initialData = { temperature: 0, state: "request", error: undefined };
const initialState: Array<_City> = [
  { id: 3871336, name: "Santiago", ...initialData },
  { id: 3435910, name: "Buenos Aires", ...initialData },
  { id: 3936456, name: "Lima", ...initialData },
  { id: 3448439, name: "Sao Paulo", ...initialData }
];

const reducer = (
  state: Array<_City> = initialState,
  action: _ActionPayload
) => {
  switch (action.type) {
    case CITY_UPDATE__FAIL:
      /* Update Fail fields */
      if (action.payload.error === undefined) return state;
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, state: "fail", error: action.payload.error }
          : item
      );

    case CITY_UPDATE__SUCCESS:
      /* Update Success fields */
      return state.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              state: "success",
              temperature: action.payload.temperature
            }
          : item
      );
    default:
      return state;
  }
};

export default reducer;

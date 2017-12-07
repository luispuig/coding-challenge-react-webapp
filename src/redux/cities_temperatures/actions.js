// @flow
import type {_AddPayload} from "./types"

export const CITY_TEMPERATURE__ADD:string = "CITY_TEMPERATURE__ADD";

export const cityTemperature_Add = ({id, temperature, date}:{..._AddPayload, date:?Date}) => ({
  type: CITY_TEMPERATURE__ADD,
  payload: { id, temperature, date: (date !== undefined)? date: new Date() }
});

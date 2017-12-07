// @flow

import openWeather from "../../services/openWeather";

import type { _RequestPayload, _SuccesPayload, _FailPayload } from "./types.js"
import type { _State } from "../types.js"


export const CITY_UPDATE__REQUEST: string = "CITY_UPDATE__REQUEST";
export const CITY_UPDATE__FAIL: string = "CITY_UPDATE__FAIL";
export const CITY_UPDATE__SUCCESS: string = "CITY_UPDATE__SUCCESS";

export const cityUpdateAll = () => {

  /*
    ApiWeather allows to get all cities in one request with a limit of 20.
    But each city will be fetched individually for showing a more standard way.
    This way will allow future features like different update time per city.
   */

  return (dispatch:any => void, getState:any => void ) => {

    const state:_State = getState();
    const { cities } = state;
    // Dispatch Request Action for each City
    cities.map( item => dispatch( cityUpdate( { id: item.id } ) ) );
  }

};

export const cityUpdate = ( { id }:_RequestPayload, date:?Date = undefined ) => {
  return (dispatch:any => void) => {

    // Set City State to Fetching Request
    dispatch( cityUpdate_Request( { id } ) );

    // Fetch Promise
    return openWeather.getTempByCityId( id ).then(
        (temperature:number) => {
          dispatch( cityUpdate_Success  ( { id, temperature } ) );
        },
        (error:{ message:string }) => {
          dispatch( cityUpdate_Fail( { id, error: error.message } ) ) }
    );
  }
};

export const cityUpdate_Request = ({ id }:_RequestPayload) => ({
  type: CITY_UPDATE__REQUEST,
  payload: { id },
});

export const cityUpdate_Fail = ({id, error}:_FailPayload) => ({
  type: CITY_UPDATE__FAIL,
  payload: {id, error}
});

export const cityUpdate_Success = ({id, temperature}:_SuccesPayload) => ({
  type: CITY_UPDATE__SUCCESS,
  payload: {id, temperature}
});

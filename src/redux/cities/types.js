// @flow
import type { _Temperature } from '../city_temperatures/types';

export  type _City = {
  id: number,
  name: string,
  temperature?: number,
  state: "request" | "success" | "fail",
  error?: string,
};

export type _ActionPayload = {
  type:"string",
  payload: { id: number, temperature?: number, error?: string  },
};

export type _RequestPayload = { id: number };
export type _SuccesPayload = { id: number, temperature: number };
export type _FailPayload = { id: number, error: string };

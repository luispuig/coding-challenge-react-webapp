// @flow

export type _Temperature = {
  temperature: number,
  date: Date,
  id: number
};

export type _ActionPayload = {
  type:"string",
  payload:_AddPayload
};

export type _AddPayload = { id: number, temperature: number };

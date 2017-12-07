// @flow
import type { _Temperature } from './cities_temperatures/types';
import type { _City } from './cities/types';


export  type _State = {
  cities: Array<_City>,
  cities_temperatures: Array<_Temperature>
}

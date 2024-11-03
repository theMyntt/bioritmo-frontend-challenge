import { Action, createReducer, on } from '@ngrx/store';
import { fetchDataSuccess } from '../actions/location.actions';
import { TLocationDTO } from '../../types/locaction';
import { IQueryForm } from '../../types/queryForm';

export type AppState = TLocationDTO & {
}

export const initializerState: AppState = {
  current_country_id: 0,
  locations: [],
  wp_total: 0,
  total: 0,
  success: false,
};

const _appReducer = createReducer(
  initializerState,
  on(fetchDataSuccess, (_, locations) => {
    return locations
  })
);

export function appReducer(state: AppState = initializerState, action: Action) {
  return _appReducer(state, action);
}

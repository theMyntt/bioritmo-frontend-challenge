import { Action, createReducer } from '@ngrx/store';
import { TLocationDTO } from '../../types/locaction';
import { on } from '@ngrx/store';
import { fetchDataSuccess } from '../actions/location.actions';

export interface AppState {
  locations: TLocationDTO;
}

export const initializerState: AppState = {
  locations: {
    current_country_id: 0,
    locations: [],
    wp_total: 0,
    total: 0,
    success: false,
  },
};

const _appReducer = createReducer(
  initializerState,
  on(fetchDataSuccess, (state, { locations }) => ({
    ...state,
    locations: { ...state.locations, ...locations },
  }))
);

export function appReducer(state: AppState, action: Action<string>) {
  return _appReducer(state, action);
}

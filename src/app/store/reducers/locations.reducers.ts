import { Action, createReducer, on } from '@ngrx/store';
import {
  fetchDataSuccess,
  queryFormSuccess,
} from '../actions/location.actions';
import { TLocationDTO } from '../../types/locaction';
import { IQueryForm } from '../../types/queryForm';

export interface AppState {
  locations: TLocationDTO;
  form: IQueryForm;
}

export const initializerState: AppState = {
  locations: {
    current_country_id: 0,
    locations: [],
    wp_total: 0,
    total: 0,
    success: false,
  },
  form: {
    time: '',
    closedGyms: false,
  },
};

const _appReducer = createReducer(
  initializerState,
  on(fetchDataSuccess, (state, { locations }) => ({
    ...state,
    locations: { ...state.locations, ...locations },
  })),
  on(queryFormSuccess, (state, { form }) => ({
    ...state,
    form: { ...state.form, ...form },
  }))
);

export function appReducer(state: AppState = initializerState, action: Action) {
  return _appReducer(state, action);
}

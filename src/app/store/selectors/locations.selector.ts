import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/locations.reducers';

export const selectLocations = (state: AppState) => state.locations;

export const selectLocationState = createSelector(
  selectLocations,
  (locations) => locations
);

export const selectForm = (state: AppState) => state.form;
export const  selectFormState = createSelector(
  selectForm,
  (form) => form
);

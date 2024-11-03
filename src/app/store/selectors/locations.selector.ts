import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/locations.reducers';

export const selectLocations = (state: any) => state.locations;

export const selectLocationState = createSelector(
  selectLocations,
  (locations) => locations
);

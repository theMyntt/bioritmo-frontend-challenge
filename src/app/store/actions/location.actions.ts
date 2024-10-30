import { createAction, props } from '@ngrx/store';
import { TLocationDTO } from '../../types/locaction';

export const fetchData = createAction('[Location] Fetch Data');
export const fetchDataSuccess = createAction(
  '[Location] Fetch Data Success',
  props<TLocationDTO>()
);

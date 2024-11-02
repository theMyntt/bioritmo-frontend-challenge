import { createAction, props } from '@ngrx/store';
import { TLocationDTO } from '../../types/locaction';
import { IQueryForm } from '../../types/queryForm';

export const fetchData = createAction(
  '[Location] Fetch Data',
  props<{
    form: IQueryForm;
  }>()
);
export const fetchDataSuccess = createAction(
  '[Location] Fetch Data Success',
  props<{ locations: TLocationDTO }>()
);

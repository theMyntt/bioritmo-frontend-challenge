import { createAction, props } from '@ngrx/store';
import { TLocationDTO } from '../../types/locaction';
import { IQueryForm } from '../../types/queryForm';

export const fetchData = createAction('[Location] Fetch Data');
export const fetchDataSuccess = createAction(
  '[Location] Fetch Data Success',
  props<{ locations: TLocationDTO }>()
);

export const queryForm = createAction(
  '[Location] Query form',
  props<{ form: IQueryForm }>()
);
export const queryFormSuccess = createAction(
  '[Location] Query form Success',
  props<{ form: IQueryForm }>()
);

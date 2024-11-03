import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LocationService } from '../../apis/location.service';
import { fetchData, fetchDataSuccess } from '../actions/location.actions';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';

@Injectable()
export class LocationEffects {
  private readonly actions$ = inject(Actions);
  private readonly locationsService = inject(LocationService);

  featchLocationsEffect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(fetchData),
        switchMap((action) => this.locationsService.fetchLocations(action.form).pipe(
          map((locations) => fetchDataSuccess(locations)),
        ))
      )
    }
  )
}

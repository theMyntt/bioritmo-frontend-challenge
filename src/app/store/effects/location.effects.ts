import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LocationService } from '../../apis/location.service';
import { fetchData, fetchDataSuccess } from '../actions/location.actions';
import { catchError, from, lastValueFrom, map, mergeMap, of } from 'rxjs';

@Injectable()
export class LocationEffects {
  private readonly locationsService = inject(LocationService);

  constructor(private actions$: Actions) {}

  loadLocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchData),
      mergeMap(() =>
        from(this.locationsService.fetchLocations()).pipe(
          mergeMap(response => lastValueFrom(response).then(data => fetchDataSuccess(data))),
          catchError(() => of({ type: '[Service] Load Locations failure' }))
        )
      )
    )
  );
}

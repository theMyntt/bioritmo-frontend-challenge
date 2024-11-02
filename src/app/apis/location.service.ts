import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { TLocation, TLocationDTO } from '../types/locaction';
import { HttpClient } from '@angular/common/http';
import { IQueryForm } from '../types/queryForm';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  fetchLocations(form: IQueryForm): Observable<TLocationDTO> {
    return this.http.get<TLocationDTO>('/locations.json').pipe(
      map((response: TLocationDTO) => {
        const locations = this.filterLocations(response.locations, form);

        return {
          current_country_id: response.current_country_id,
          locations: locations,
          wp_total: response.wp_total,
          total: response.total,
          success: response.success,
        };
      })
    );
  }

  private filterLocations(locations: TLocation[], form: IQueryForm): TLocation[] {
    return locations.filter(location => {
      const schedule = location.schedules.find(schedule => schedule.hour.substring(0,3) === form.time);
      const isClosedGym = form.closedGyms && schedule?.hour === 'Fechada';
      return schedule || isClosedGym;
    });
  }
}

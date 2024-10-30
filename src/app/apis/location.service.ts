import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { TLocationDTO } from '../types/locaction';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  fetchLocations() {
    return this.http.get<TLocationDTO>('/locations.json');
  }
}

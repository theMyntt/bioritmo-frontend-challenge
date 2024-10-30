import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { TLocationDTO } from "../types/locaction";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  async fetchLocations() {
    const response = await fetch('/locations.json')
    return of(response.json() as unknown as TLocationDTO)
  }
}
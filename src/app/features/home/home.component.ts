import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TLocationDTO } from '../../types/locaction';
import { Store } from '@ngrx/store';
import {
  selectLocations,
  selectLocationState,
} from '../../store/selectors/locations.selector';
import { CommonModule } from '@angular/common';
import { BrandTextComponent } from './components/brand-text/brand-text.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { GymCardComponent } from './components/gym-card/gym-card.component';
import { AppState } from '../../store/reducers/locations.reducers';
import { GymProtectionsComponent } from "./components/gym-protections/gym-protections.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BrandTextComponent,
    TimePickerComponent,
    GymCardComponent,
    GymProtectionsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly locations$!: Observable<TLocationDTO>;

  constructor(private store: Store<AppState>) {
    this.locations$ = this.store.select(selectLocations);
  }
}

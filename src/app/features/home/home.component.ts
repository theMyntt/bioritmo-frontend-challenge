import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TLocationDTO } from '../../types/locaction';
import { Store } from '@ngrx/store';
import { selectLocationState } from '../../store/selectors/locations.selector';
import { AppState } from '../../store/reducers/locations.reducers';
import { fetchData } from '../../store/actions/location.actions';
import { CommonModule } from '@angular/common';
import { BrandTextComponent } from './components/brand-text/brand-text.component';
import { TimePickerComponent } from "./components/time-picker/time-picker.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BrandTextComponent, TimePickerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly locations$!: Observable<TLocationDTO>

  constructor(private store: Store<AppState>) {
    this.locations$ = this.store.select(selectLocationState)
  }
}

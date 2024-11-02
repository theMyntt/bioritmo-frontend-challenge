import { Component, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/reducers/locations.reducers';
import { selectLocationState } from '../../../../store/selectors/locations.selector';
import { Observable } from 'rxjs';
import { TLocationDTO } from '../../../../types/locaction';
import { CommonModule } from '@angular/common';
import {
  fetchData,
} from '../../../../store/actions/location.actions';

@Component({
  selector: 'app-time-picker',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './time-picker.component.html',
  styleUrl: './time-picker.component.scss',
})
export class TimePickerComponent implements OnInit {
  protected itemsCount = signal(0);
  protected readonly locations$!: Observable<TLocationDTO>;
  protected timeForm = new FormGroup({
    time: new FormControl('06h', [Validators.required]),
    closedGyms: new FormControl(false, Validators.required),
  });

  public submit() {
    if (this.timeForm.invalid) {
      return;
    }

    this.store.dispatch(fetchData({ form: {
      closedGyms: this.timeForm.value.closedGyms ?? false,
      time: this.timeForm.value.time ?? '06h',
    } }));
  }

  constructor(private store: Store<AppState>) {
    this.locations$ = this.store.select(selectLocationState);
  }

  ngOnInit(): void {
    this.locations$.subscribe((data: any) => {
      this.itemsCount.set(data.locations.locations.length);
    });
  }
}

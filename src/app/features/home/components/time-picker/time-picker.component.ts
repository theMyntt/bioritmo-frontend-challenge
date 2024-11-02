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
import { fetchData } from '../../../../store/actions/location.actions';

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
    time: new FormControl('', [Validators.required]),
    closedGyms: new FormControl(false),
  });

  public submit() {
    console.log(this.timeForm);
  }

  constructor(private store: Store<AppState>) {
    this.locations$ = this.store.select(selectLocationState);
  }

  ngOnInit(): void {
    this.locations$.subscribe((data: any) => {
      this.itemsCount.set(data.locations.total); 
    });
  }
}

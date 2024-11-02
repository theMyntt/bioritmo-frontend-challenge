import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-time-picker',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './time-picker.component.html',
  styleUrl: './time-picker.component.scss'
})
export class TimePickerComponent {
  itemsCount = signal(0)
  timeForm = new FormGroup({
    time: new FormControl('', [Validators.required]),
    closedGyms: new FormControl(false)
  })

  submit() {
    console.log(this.timeForm)
  }
}

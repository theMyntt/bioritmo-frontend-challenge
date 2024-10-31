import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  standalone: true,
  imports: [],
  templateUrl: './time-picker.component.html',
  styleUrl: './time-picker.component.scss'
})
export class TimePickerComponent {
  itemsCount = signal(0)
}

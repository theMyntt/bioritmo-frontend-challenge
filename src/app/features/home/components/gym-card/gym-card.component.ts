import { Component, input } from '@angular/core';
import { TLocation } from '../../../../types/locaction';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-gym-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gym-card.component.html',
  styleUrl: './gym-card.component.scss'
})
export class GymCardComponent {
  gym = input.required<TLocation>()
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-go-to-top',
  standalone: true,
  imports: [],
  templateUrl: './go-to-top.component.html',
  styleUrl: './go-to-top.component.scss'
})
export class GoToTopComponent {
  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

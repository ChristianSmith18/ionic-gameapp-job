import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}

  segment = 'inicio';

  segmentChanged(event) {
    console.log('Click', event);
  }
}

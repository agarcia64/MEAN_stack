import { Component } from '@angular/core';
import { LOCATIONS } from './LOCATIONS-MOCK';
import { LOCATION } from './LOCATIONS';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS5';
  locations = LOCATIONS;
}

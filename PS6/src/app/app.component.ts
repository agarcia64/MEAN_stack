import { Component, OnInit } from '@angular/core';
import { LOCATIONS } from './LOCATIONS-MOCK';
import { LOCATION } from './LOCATIONS';
import { TweetsService } from './tweets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  locations = LOCATIONS;

  randomQuote: string;

  constructor(private tweetsService: TweetsService) { }

  getTweet() {
    this.tweetsService.generateTweet();
  }
}

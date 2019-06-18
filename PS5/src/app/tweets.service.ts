import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private http: HttpClient) { }

  private serverUrl = 'http://localhost:3000/tweet';

  generateTweet() {
    return this.http.get(this.serverUrl);
  }
}

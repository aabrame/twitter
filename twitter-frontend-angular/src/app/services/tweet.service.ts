import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private url = environment.backendUrl + 'tweets';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Tweet[]> {
    return this.httpClient.get<Tweet[]>(this.url).pipe(delay(1000));
  }

  findById(id: number): Observable<Tweet> {
    return this.httpClient.get<Tweet>(this.url + "/" + id).pipe(delay(1000));
  }

  save(tweet: Partial<Tweet>): Observable<Tweet> {
    const u = { ...tweet, date: new Date(), views: 0 };
    delete u.id;
    return this.httpClient.post<Tweet>(this.url, u);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.url + "/" + id).pipe(delay(1000));
  }
}

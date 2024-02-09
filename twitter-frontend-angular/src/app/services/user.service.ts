import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, delay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.backendUrl + 'users';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  search(name: string): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url, {
      params : {
        name: name
      }
    });
  }

  findById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.url + "/" + id).pipe(delay(1000));
  }

  save(user: Partial<User>): Observable<User> {
    const u = { ...user };
    delete u.id;
    return this.httpClient.post<User>(this.url, u);
  }

  update(user: Partial<User>): Observable<void> {
    return this.httpClient.put<void>(this.url + '/' + user.id, user);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.url + "/" + id).pipe(delay(1000));
  }
}

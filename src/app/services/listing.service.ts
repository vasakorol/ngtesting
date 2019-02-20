import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UserResponse } from '../models/user-response';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private page: number;
  public users: Observable<User[]>;
  private users$: BehaviorSubject<User[]>;


  constructor(
    private apiService: ApiService
  ) {
    this.page = 1;
    this.users$ = new BehaviorSubject([]);
    this.users = this.users$.asObservable();
    this.users.subscribe();
  }

  getPromList() {
    return new Promise((resolve, reject) => {
      this.apiService.get('https://reqres.in/api/users')
        .toPromise()
        .then((response: UserResponse) => {
          resolve(response);
        })
        .catch(error => reject(error));
    });
  }

  getList() {
    this.apiService.get('https://reqres.in/api/users').subscribe((response: UserResponse) => {
      this.page = response.page;
      this.users$.next(response.data);
    });
  }

  getUsers() {
    return this.apiService.get<UserResponse>('https://reqres.in/api/users');
  }

  getPage(): number {
    return this.page;
  }
}

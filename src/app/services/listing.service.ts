import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private page: number;

  constructor(
    private apiService: ApiService
  ) {
    this.page = 1;
  }

  getPromList() {
    return new Promise((resolve, reject) => {
      this.apiService.get('https://reqres.in/api/users').toPromise().then((response: Response) => {
        console.log('response', response);
        resolve(response);
      });
    });
  }

  getPage(): number {
    return this.page;
  }
}

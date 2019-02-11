import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  public get<T>(url: string, body?: any): Observable<T> {
    return this.request<T>(url, 'get', body);
  }

  private request<T>(url: string, method: string, body?: any): Observable<T> {
    const options = {
      body: body || {}
    };
    return this.http.request<T>(method, url, options);
  }
}

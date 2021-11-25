import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}/${url}`, {
      headers: this.headers,
    });
  }

  post<T, D>(url: string, data?: D): Observable<T> {
    return this.http.post<T>(
      `${environment.apiUrl}/${url}`,
      JSON.stringify(data),
      {
        headers: this.headers,
      }
    );
  }

  put<T, D>(url: string, data: D): Observable<T> {
    return this.http.put<T>(
      `${environment.apiUrl}/${url}`,
      JSON.stringify(data),
      {
        headers: this.headers,
      }
    );
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${environment.apiUrl}/${url}`, {
      headers: this.headers,
    });
  }
}

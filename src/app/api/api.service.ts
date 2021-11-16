import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getList() {
    const url = 'https://api.realworld.io/api/articles';
    return '';
  }
}

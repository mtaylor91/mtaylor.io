import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppBackendService {
  constructor(private http: HttpClient) { }

  url = "http://localhost:4000/api"

  get(path) {
    path = this.url + path
    return this.http.get(path)
  }

  put(path, body) {
    path = this.url + path
    return this.http.put(path, body)
  }
}

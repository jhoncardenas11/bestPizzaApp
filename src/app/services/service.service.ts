import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`https://raw.githubusercontent.com/kevmuy/test-frontend/master/RH.json`).toPromise();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${environment.url}/kevmuy/test-frontend/master/RH.json`).toPromise();
  }
}

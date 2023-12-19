import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    host = 'http://localhost:4200/api/';
    constructor(private http: HttpClient) { }

    getEmployees() {    
      let endpoint = 'employees';
      let url = this.host + endpoint;
      return this.http.get<any>(url);
    }

}

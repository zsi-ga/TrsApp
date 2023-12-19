import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host = 'http://localhost:4200/api/';

  constructor(private http: HttpClient) { }

  login(user: string, pass: string) {
    const authData = {
      name: user,
      password: pass
    }
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint = 'login';
    let url = this.host + endpoint;
    return this.http.post<any>(url, authData, httpOptions);
  }
  logout(name: string, token: string) {
    const userData = {
      name: name,
      tokenId: token
    }
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint = 'logout';
    let url = this.host + endpoint;
    console.log(userData.name)
    return this.http.post<any>(url, userData, httpOptions);
  }
}

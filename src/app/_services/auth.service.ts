import { Injectable } from '@angular/core';
import {delay, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:56819/api/auth/';
  loggedInUser: string;
  role: string;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            this.loggedInUser = model.username;
            this.role = user.role;
            console.log(this.role);
          }
        })
      );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }
}

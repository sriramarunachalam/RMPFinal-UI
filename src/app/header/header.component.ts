import { Component, OnInit } from '@angular/core';
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUser: any = '';
  role: any = ''

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loggedIn();
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    this.loggedInUser = this.authService.loggedInUser;
    this.role = this.authService.role;
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
    this.loggedInUser = '';
  }

}

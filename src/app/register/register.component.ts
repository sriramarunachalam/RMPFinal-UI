import { Component, OnInit } from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  errorMsgs: any = [];

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }
  register() {
    this.authService.register(this.model).subscribe(() => {
      this.route.navigateByUrl('');
    }, error => {
      console.log(error);
      this.errorMsgs = error.split(".");
    });
    console.log(this.model);
  }
  log(message) {
    console.log(message);
  }

}

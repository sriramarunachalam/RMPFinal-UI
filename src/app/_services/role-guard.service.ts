import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{


  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role = this.authService.role;
    if (role) {
      console.log('hurray');
    } else {
      console.log('shit!!');
    }
    console.log('from service' + role);
    console.log('route.data ' + route.data.role);
    if (role === route.data.role) {
      return true;
    }
    this.router.navigateByUrl('404');
    return false;
  }
}

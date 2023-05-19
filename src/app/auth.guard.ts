import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Lấy giá trị từ localStorage:
    const getLocal:any = localStorage.getItem('user');
    const user = JSON.parse(getLocal)
    if (user['user']['role'] != 1) {
      return false
    } else {
      return true;
    }
  }
  
}

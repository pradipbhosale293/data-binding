import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, Resolve<any> {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Business Logic goes here
    // 1- admin
    // 2- student
    // 3- principal
    // let role= 2;
    // if(role==2){
    //   return false;
    // }      
    // else{
    //   return true;
    // } 
    return true;
  }
  resolve(){
    
    // business logic goes here to fect the data before entering into that component.
    return false;
  }
  
}

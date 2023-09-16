import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { abs } from 'src/app/utils';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IsCompleteGuard implements CanActivate {
  constructor(private http: HttpClient, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.http.get<ApiResp<Character>>(`${environment.backendURL}character/${route.params["id"]}`).pipe(map(char => {
      for (const ab of abs) {
        if(char.char[ab]) {
          continue
        } else {
          this.router.navigate(["char", route.params["id"], "inspo"])
          return false
        }
      }
      return true
    }))
  }

}

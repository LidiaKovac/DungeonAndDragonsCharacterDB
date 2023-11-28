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
        if(!char.char.complete) {
          this.router.navigate(["char", route.params["id"], "inspo"])
        }
        return char.char.complete
    }))
  }

}

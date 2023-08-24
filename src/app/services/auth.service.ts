import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
    this.verify().subscribe()
  }
  isLoggedIn = new BehaviorSubject<boolean>(false)
  me = new BehaviorSubject<User | null>(null)
  login(email: string, password: string) {
    return this.http.post("http://localhost:3001/api/user/login", {
      email, password
    }, {
      responseType: 'text',
      observe: 'response',
    }).pipe(map((res) => {
      localStorage.setItem("dndToken", res.headers.get("token")!)
      this.isLoggedIn.next(true)
      return res
    }), catchError(res => {
      this.isLoggedIn.next(false)
      alert("Error logging in")
      return res

    }))

  }
  verify() {
    return this.http.get<User>("http://localhost:3001/api/user/me", {
      // responseType: 'text',
      observe: 'response',
    }).pipe(map(res => {
      this.isLoggedIn.next(true)
      this.me.next(res.body)
    }))
  }

}

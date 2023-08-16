import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post("http://localhost:3001/api/user/login", {
      email, password
    }, {
      responseType: 'text',
      observe: 'response',
    }).pipe(map((res) => {
      localStorage.setItem("dndToken",res.headers.get("token")!)
      return res
    }))

  }

}

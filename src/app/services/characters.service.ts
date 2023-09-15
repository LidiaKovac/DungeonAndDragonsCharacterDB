import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  // char = new BehaviorSubject<Character | null>(null)
  color$ = new BehaviorSubject<Colors>('pink')
  color = this.color$.asObservable()
  constructor(private http: HttpClient) { }

  getAllChars() {
    return this.http.get<Character[]>(`${environment.backendURL}character/`)
  }
  getCharById(id: string) {
    return this.http.get<ApiResp<Character>>(`${environment.backendURL}character/${id}`)
  }
  editCharById(id: string, data: FormData) {
    return this.http.put<ApiResp<Character>>(`${environment.backendURL}character/${id}`, data)
  }
  createChar(data: FormData) {
    return this.http.post<Character>(`${environment.backendURL}character/`, data)
  }

  setColor(color: Colors) {
    this.color$.next(color)
  }
}

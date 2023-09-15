import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private char$ = new BehaviorSubject<ApiResp<Character> | null>(null)
  private color$ = new BehaviorSubject<Colors>('pink')
  color = this.color$.asObservable()
  char = this.char$.asObservable()
  constructor(private http: HttpClient) { }

  getAllChars() {
    return this.http.get<Character[]>(`${environment.backendURL}character/`)
  }
  getCharById(id: string) {
    return this.http.get<ApiResp<Character> | null>(`${environment.backendURL}character/${id}`).pipe(map(res => {
      this.char$.next(res)
      return res
    }))
  }
  editCharById(id: string, data: FormData) {
    return this.http.put<ApiResp<Character>>(`${environment.backendURL}character/${id}`, data)
  }
  createChar(data: FormData) {
    return this.http.post<Character>(`${environment.backendURL}character/`, data)
  }
  editCharSkillsById(id: string, skillName: string) {
    return this.http.put<ApiResp<Character>>(`${environment.backendURL}character/${id}/skills/${skillName}`, null).pipe(tap(res => this.char$.next(res)))
  }

  setColor(color: Colors) {
    this.color$.next(color)
  }
}

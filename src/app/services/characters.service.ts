import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  // char = new BehaviorSubject<Character | null>(null)
  constructor(private http: HttpClient) { }

  getAllChars() {
    return this.http.get<Character[]>("http://localhost:3001/api/character")
  }
  getCharById(id: string) {
    return this.http.get<ApiResp<Character>>("http://localhost:3001/api/character/" + id)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PassiveService {
  private _classes = new BehaviorSubject<DNDClass[]>([])
  private _races = new BehaviorSubject<DNDRace[]>([])
  classes = this._classes.asObservable()
  races = this._races.asObservable()
  constructor(http:HttpClient) {
    http.get<DNDClass[]>(`${environment.backendURLShort}passive/class`).pipe(
      switchMap((res) => {
        this._classes.next(res)
        return http.get<DNDRace[]>(`${environment.backendURLShort}passive/race`)
      }),
      tap(res => {
        this._races.next(res)
      })
    ).subscribe()
  }

}

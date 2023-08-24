import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  private edit$ = new BehaviorSubject<boolean>(false)
  edit = this.edit$.asObservable()
  constructor() { }

  toggleEdit() {
    this.edit$.next(!this.edit$.value)
  }
}

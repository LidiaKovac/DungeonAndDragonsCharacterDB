import { Component, Input, OnInit } from '@angular/core';
import { abs } from 'src/app/utils';

@Component({
  selector: 'app-single-char',
  templateUrl: './single-char.component.html',
  styleUrls: ['./single-char.component.scss']
})
export class SingleCharComponent implements OnInit {
  @Input() char!: Character
  constructor() { }
  isComplete() {
    for (const ab of abs) {
      if(this.char[ab]) {
        continue
      } else {
        return false
      }
  }
  return true
}
  ngOnInit(): void {

  }

}

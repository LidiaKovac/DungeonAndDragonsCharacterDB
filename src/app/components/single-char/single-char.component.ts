import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-char',
  templateUrl: './single-char.component.html',
  styleUrls: ['./single-char.component.scss']
})
export class SingleCharComponent implements OnInit {
  @Input() char!: Character
  constructor() { }

  ngOnInit(): void {
  }

}

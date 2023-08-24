import { Component, Input, OnInit } from '@angular/core';
import { abs } from 'src/app/utils';
@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {
  abs = abs
  @Input() char!: ApiResp<Character>
  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {

  }
}

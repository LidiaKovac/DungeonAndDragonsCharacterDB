import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-header',
  templateUrl: './character-header.component.html',
  styleUrls: ['./character-header.component.scss']
})
export class CharacterHeaderComponent implements OnInit {
  @Input() char!: ApiResp<Character>
  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {

  }
}

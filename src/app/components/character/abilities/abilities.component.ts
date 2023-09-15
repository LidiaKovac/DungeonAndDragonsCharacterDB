import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { abs } from 'src/app/utils';
@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {
  abs = abs
  char!: ApiResp<Character>
  constructor(private charSrv: CharactersService) {
    this.charSrv.char.subscribe(res => this.char = res!)
  }

  ngOnInit(): void {
  }

  handleSubmit() {

  }
}

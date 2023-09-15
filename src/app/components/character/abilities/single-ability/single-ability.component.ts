import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-single-ability',
  templateUrl: './single-ability.component.html',
  styleUrls: ['./single-ability.component.scss']
})
export class SingleAbilityComponent implements OnInit {
  @Input() ab!: string
  char!: ApiResp<Character>
  color!: Colors;
  constructor(private charSrv: CharactersService) {
    this.charSrv.color.subscribe(col => this.color = col)
    this.charSrv.char.subscribe(res => this.char = res!)
  }

  ngOnInit(): void {
  }

}

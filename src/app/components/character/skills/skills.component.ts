import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() char!: ApiResp<Character>
  possibleCharSkillProf: string[] = []
  charSkill: string[] = []
  color!: Colors
  constructor(private charSrv: CharactersService) {
    this.charSrv.color.subscribe(col => this.color = col)
  }

  ngOnInit(): void {
    if (this.char.char.Class && this.char.char.Skills) {

      this.possibleCharSkillProf = this.char.char.Class.skillProf.map(sk => sk.name)
      this.charSkill = this.char.char.Skills.map(sk => sk.name)
    }

  }

}

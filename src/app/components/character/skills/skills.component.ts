import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() char!: ApiResp<Character>
  possibleCharSkillProf: string[] = []
  charSkill: string[] = []
  constructor() {}

  ngOnInit(): void {
    this.possibleCharSkillProf = this.char.char.Class.skillProf.map(sk => sk.name)
    this.charSkill = this.char.char.Skills.map(sk => sk.name)

  }

}

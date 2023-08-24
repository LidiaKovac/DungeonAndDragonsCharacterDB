import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CharactersService } from 'src/app/services/characters.service';
import { EditService } from 'src/app/services/edit.service';
import { calculateProf } from 'src/app/utils';

@Component({
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  id!: string | null
  char!: ApiResp<Character>
  edit:boolean = false
  constructor(
    private route: ActivatedRoute,
    private charSrv: CharactersService,
    private editSrv:EditService
  ) {
    this.route.paramMap.pipe(map((params) => {
      return params.get("id")
    }), switchMap(id => {
      return this.charSrv.getCharById(id!)
    })).subscribe(char => {
      this.char = char
    })
    this.editSrv.edit.subscribe(res => this.edit = res)
  }
  get prof() {
    return calculateProf(parseInt(this.char.char.level))
  }
  ngOnInit(): void {
  }

}

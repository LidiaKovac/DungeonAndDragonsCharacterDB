import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  id!: string | null
  char!: ApiResp<Character>
  constructor(private route: ActivatedRoute, private charSrv: CharactersService) {
    this.route.paramMap.pipe(map((params) => {
      return params.get("id")
    }), switchMap(id => {
      return this.charSrv.getCharById(id!)
    })).subscribe(char => {
      this.char = char
    })
  }

  ngOnInit(): void {
  }

}

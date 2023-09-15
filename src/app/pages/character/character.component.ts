import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { BehaviorSubject, map, switchMap } from 'rxjs';
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
  edit: boolean = false
  autoSaveTimeout!: NodeJS.Timeout
  lastSaved!: string
  color!: Colors

  constructor(
    private route: ActivatedRoute,
    private charSrv: CharactersService,
    private editSrv: EditService
  ) {
    this.route.paramMap.pipe(map((params) => {
      return params.get("id")
    }), switchMap(id => {
      return this.charSrv.getCharById(id!)
    }), switchMap((char) => {
      return this.charSrv.char
    }), switchMap((char) => {
      this.char = char!
      return this.charSrv.color
    })).subscribe(color => {
      this.color = color
      // this.color.next(this.charSrv.color)
      // this.lastSaved= moment(char.char.updatedAt).fromNow() ;
      //TODO: return updateAt from backend
    })
    this.editSrv.edit.subscribe(res => this.edit = res)
  }
  get prof() {
    if (this.char.char.level) {
      return calculateProf(parseInt(this.char.char.level))
    } else return 0
  }
  ngOnInit(): void {
  }

  handleSubmit(ev: Event) {
    const trg = ev.target as HTMLFormElement
    this.charSrv.editCharById(this.char.char.id, new FormData(trg)).subscribe(res => {
      this.editSrv.toggleEdit()
      this.char = res
    })
  }

  setColor(col: Colors) {
    this.charSrv.setColor(col)
  }

  autosave(ev: Event) {
    clearTimeout(this.autoSaveTimeout)
    this.autoSaveTimeout = setTimeout(() => {
      const fd = new FormData()
      fd.append("description", (ev.target as HTMLInputElement).value)
      this.charSrv.editCharById(this.char.char.id, fd).subscribe(res => {
        this.char = res

        this.lastSaved = moment(new Date()).fromNow()
      })
    }, 1000)
  }
}

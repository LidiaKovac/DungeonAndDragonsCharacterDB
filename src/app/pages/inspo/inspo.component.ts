import {
  Component,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CharactersService } from 'src/app/services/characters.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop/drag-events';
import { ResizedEvent } from 'angular-resize-event/public-api';

@Component({
  templateUrl: './inspo.component.html',
  styleUrls: ['./inspo.component.scss'],
})
export class InspoComponent {
  char!: ApiResp<Character>;
  color!: Colors;
  inspos: Inspo[] = []
  newInspo!: File
  autoSaveTimer!: NodeJS.Timeout
  constructor(
    private route: ActivatedRoute,
    private charSrv: CharactersService
  ) {
    this.route.paramMap
      .pipe(
        map((params) => {
          return params.get('id');
        }),
        switchMap((id) => {
          return this.charSrv.getCharById(id!);
        }),
        switchMap((char) => {
          return this.charSrv.char;
        }),
        switchMap((char) => {
          this.char = char!;
          return this.charSrv.color;
        })
      )
      .subscribe((color) => {
        this.color = color;
        this.char.char.Inspos = this.char.char.Inspos.map(img => {
          return {
            ...img, style: `top: ${img.y}px; left: ${img.x}px; width: ${img.w}px; height: ${img.h}px`
          }
        })
      });
  }



  savePosition(ev: CdkDragEnd, id: string, curr: Inspo) {
    console.log(ev.distance)
    let newX = (Number(curr.x) + Number(ev.distance.x))
    let newY = (Number(curr.y) + Number(ev.distance.y))
    if (newX <= 0) {
      newX = 0
    }
    if (newY <= 0) {
      newY = 0
    }
    if (newX > window.innerWidth) {
      newX = window.innerWidth - 500
    }
    if (newY > window.innerHeight) {
      newY = window.innerHeight - 200
    }
    this.charSrv.editCharInspoById(this.char.char.id, id, { x: newX, y: newY }).subscribe(res => {
      this.char.char.Inspos = res.map((img: Inspo) => ({
        ...img,
        style: `top: ${img.y}px; left: ${img.x}px; width: ${img.w}; height: ${img.h}`
      }))
    })
  }

  getRandom() {
    return Math.ceil(Math.random() * 5)
  }

  onResize(event: Event) {
    console.log(event)
  }

  addNew(event: Event) {
    console.log(event)
    this.newInspo = (event.target as HTMLInputElement).files![0]
    if (this.newInspo) {
      const fd = new FormData()
      fd.append("inspo", this.newInspo)
      this.charSrv.addCharInspoById(this.char.char.id, fd).subscribe((res) => {
        this.char.char.Inspos = res.map((img: Inspo) => ({
          ...img,
          style: `top: ${img.y}px; left: ${img.x}px; width: ${img.w}; height: ${img.h}`
        }))
      })
    }
  }
  remove(id: string) {
    this.charSrv.deleteCharInspoById(this.char.char.id, id).subscribe(res => {
      this.char.char.Inspos = res.map((img) => ({
        ...img,
        style: `top: ${img.y}px; left: ${img.x}px; width: ${img.w}; height: ${img.h}`
      }))
    })
  }
  saveSize(ev: ResizedEvent, id: string) {
    if(id) {

      clearTimeout(this.autoSaveTimer)
      this.autoSaveTimer = setTimeout(() => {
        console.log(ev)
        this.charSrv.editCharInspoById(this.char.char.id, id, { w: Math.round(ev.newRect.width), h: Math.round(ev.newRect.height) }).subscribe()
      }, 500)
    }
  }
}

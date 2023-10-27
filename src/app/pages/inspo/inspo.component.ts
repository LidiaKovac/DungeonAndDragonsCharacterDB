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
            ...img, style: `top: ${img.y}%; left: ${img.x}%; width: ${img.w}%; height: ${img.h}%`
          }
        })
      });
  }



  savePosition(ev: CdkDragEnd, id: string, curr: Inspo) {
    console.log(ev.distance)
    let newX = (Number(curr.x) + Number((100 * ev.distance.x) / window.innerWidth))
    let newY = (Number(curr.y) + Number((100 * ev.distance.y) / window.innerHeight))
    console.log(newX, newY)
    if (newX <= 0) {
      newX = 0
    }
    if (newY <= 0) {
      newY = 0
    }

    this.charSrv.editCharInspoById(this.char.char.id, id, { x: Math.round(newX), y: Math.round(newY) }).subscribe(res => {
      this.char.char.Inspos = res.map((img: Inspo) => ({
        ...img,
        style: `top: ${img.y}%; left: ${img.x}%; width: ${img.w}%; height: ${img.h}%`
      }))
    })
  }

  getRandom() {
    return Math.ceil(Math.random() * 5)
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
          style: `top: ${img.y}%; left: ${img.x}%; width: ${img.w}%; height: ${img.h}%`
        }))
      })
    }
  }
  remove(id: string) {
    this.charSrv.deleteCharInspoById(this.char.char.id, id).subscribe(res => {
      this.char.char.Inspos = res.map((img) => ({
        ...img,
        style: `top: ${img.y}%; left: ${img.x}%; width: ${img.w}%; height: ${img.h}%`
      }))
    })
  }
  saveSize(ev: ResizedEvent, id: string) {
    if (id) {

      clearTimeout(this.autoSaveTimer)
      this.autoSaveTimer = setTimeout(() => {
        const curr = this.char.char.Inspos.find(el => el.id === id)
        console.log(Number(curr?.w), (Math.round((100 * ev.newRect.width) / window.innerWidth) + 2))
        if (
          Number(curr?.w) !== (Math.round((100 * ev.newRect.width) / window.innerWidth) + 2) &&
          Number(curr?.h) !== (Math.round((100 * ev.newRect.height) / window.innerHeight) + 2)) {
          // (100 * ev.distance.x) / window.innerWidth
          this.charSrv.editCharInspoById(this.char.char.id, id, {
            w: Math.round((100 * ev.newRect.width) / window.innerWidth),
            h: Math.round((100 * ev.newRect.height) / window.innerHeight)
          }).subscribe()
        }
      }, 500)
    }
  }
}

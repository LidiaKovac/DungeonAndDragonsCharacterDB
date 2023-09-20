import {
  Component,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CharactersService } from 'src/app/services/characters.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop/drag-events';

@Component({
  templateUrl: './inspo.component.html',
  styleUrls: ['./inspo.component.scss'],
})
export class InspoComponent {
  char!: ApiResp<Character>;
  color!: Colors;
  inspos: CanvasImage[] = []

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
        this.char.char.Inspos.forEach(img => {
          this.inspos.push({
            id: img.id,
            tape: this.getRandom(),
            url: img.url,
            x: img.x,
            y: img.y,
            style: `top: ${img.y}px; left: ${img.x}px;`
          })
        })
      });
  }



  savePosition(ev: CdkDragEnd, id: string, curr:Inspo) {
    console.log(ev.distance)
    const newX = (Number(curr.x) + Number(ev.distance.x)) < 0 ? 0 : (Number(curr.x) + Number(ev.distance.x))
    const newY = (Number(curr.y) + Number(ev.distance.y))< 0 ? 0 : Number(curr.y) + Number(ev.distance.y)
    this.charSrv.editCharInspoById(this.char.char.id, id, { x: newX, y: newY  }).subscribe(res => console.log(res))
  }

  getRandom() {
    return Math.ceil(Math.random() * 5)
  }
}

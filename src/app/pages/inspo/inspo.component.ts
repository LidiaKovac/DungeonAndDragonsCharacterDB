import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  templateUrl: './inspo.component.html',
  styleUrls: ['./inspo.component.scss'],
})
export class InspoComponent implements AfterViewInit {
  char!: ApiResp<Character>;
  color!: Colors;
  @ViewChild('inspo') canvas!: ElementRef<HTMLCanvasElement>;

  context!: CanvasRenderingContext2D;
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
        console.log(this.char);
        this.char?.char?.Inspos.forEach((img, i) => {
          const image = new Image();
          image.src = img.url;
          console.log(image);
          image.onload = () =>
            this.context.drawImage(
              image,
              10 + 100 * i,
              0.5,
              image.width * window.devicePixelRatio / 5,
              image.height * window.devicePixelRatio / 5
            );
        });
        // this.color.next(this.charSrv.color)
      });
  }

  ngAfterViewInit(): void {
    console.log(this.canvas);
    this.context = this.canvas.nativeElement.getContext('2d')!;
    console.log(this.char);

    this.context.imageSmoothingEnabled = false;
  }
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import uniqid from 'uniqid';
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
  canvasImages: CanvasImage[] = [];
  x!: number
  y!: number
  // @ViewChild('inspo') canvas!: ElementRef<HTMLCanvasElement>;

  // context!: CanvasRenderingContext2D;
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
        // let style_height = +getComputedStyle(this.canvas.nativeElement).getPropertyValue("height").slice(0, -2);
        // //get CSS width
        // let style_width = +getComputedStyle(this.canvas.nativeElement).getPropertyValue("width").slice(0, -2);
        // this.canvas.nativeElement.setAttribute("width", (style_width * window.devicePixelRatio).toString())
        // this.canvas.nativeElement.setAttribute("height", (style_height * window.devicePixelRatio).toString())
        this.char?.char?.Inspos.forEach((img, i) => {
          const image = new Image();
          image.src = img.url;

          //   image.onload = (e) => {
          let { naturalWidth: width, naturalHeight: height } = image;
          console.log(width, window.innerWidth);
          if (width > window.innerWidth / 2) {
            console.log('too big');
            width = width / 5;
            height = height / 5;
          }
          const left = Math.round((Math.random() * window.innerWidth) / 10);
          const top = Math.round((Math.random() * window.innerHeight) / 10);
          this.canvasImages.push({
            id: uniqid(),
            width,
            height,
            top,
            left,
            z: i,
            src: img.url,
          });
          //     this.context.drawImage(
          //       image,
          //       top,
          //       left,
          //       width,
          //       height
          //     );
          //   }
        });
        // this.canvas.nativeElement.onmousedown = (e: MouseEvent) => {
        //   const clicked = this.canvasImages.filter(img => {
        //     console.log(img.left + img.width,  img.left)
        //     return (img.left + img.width) > e.offsetX && e.offsetX > (img.left - img.width)
        //   })
        //   console.log(clicked)
        //   console.log(e)

        // }
        // this.color.next(this.charSrv.color)
      });
  }

  ngAfterViewInit(): void {
    // console.log(this.canvas);
    // this.context = this.canvas.nativeElement.getContext('2d')!;
    // console.log(this.char);
    // this.context.imageSmoothingEnabled = false;
  }

  dragHandle(ev: Event) {
    console.log(this.x, this.y);
    (ev.target as HTMLImageElement).style.top = this.y.toString();
    (ev.target as HTMLImageElement).style.left = this.x.toString()
  }



  getRandom() {
    return Math.ceil(Math.random() * 5)
  }
}

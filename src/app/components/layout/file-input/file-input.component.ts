import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  thumbnails: string[] = []
  reader = new FileReader();
  @Input() id!: string
  @Input() name!: string

  constructor() { }

  ngOnInit(): void {
  }
  showThumbnail(event: Event) {
    const target = event.target as HTMLInputElement
    console.log(target.files)
    if (target.files) {
      this.thumbnails = []
      for (let i = 0; i < target.files.length; i++) {
        this.reader = new FileReader()
        this.reader.onload = (event) => {
          console.log(event.target)
          this.thumbnails.push(event.target?.result as string)
        }

        this.reader.readAsDataURL(target.files[i])
      }
    }
  }
  scrollDown(ev:Event, dir:"up" | "down") {
    const children = (ev.target as HTMLDivElement).closest(".input__file")?.children
    if(children) {

      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if(child.classList.contains("thumbnails")) {
          if(dir === "down") child.scrollBy({top: 70, behavior: "smooth"})
          if(dir==="up") child.scrollBy({top: -70, behavior: "smooth"})
        }
      }
    }
  }
}

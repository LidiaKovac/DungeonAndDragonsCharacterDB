import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  newChar = {} as Partial<Character>
  constructor(private charSrv: CharactersService, private router: Router) { }

  ngOnInit(): void {
  }
  handleSubmit(ev:Event) {
    ev.preventDefault()
    console.log({d: ev.target})
    const fd = new FormData(ev.target as HTMLFormElement)
    this.charSrv.createChar(fd).subscribe(res => {
      this.router.navigate(["/char/" + res.id])
    })
  }
}

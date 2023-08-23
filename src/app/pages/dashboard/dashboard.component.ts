import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chars!: Character[]
  constructor(private charSrv:CharactersService) {
    this.charSrv.getAllChars().subscribe(res => {
      this.chars = res
    })
  }

  ngOnInit(): void {
  }

}

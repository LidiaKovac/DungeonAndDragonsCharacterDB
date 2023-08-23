import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  id!:string | null
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => this.id = param.get("id"))
  }

  ngOnInit(): void {
  }

}

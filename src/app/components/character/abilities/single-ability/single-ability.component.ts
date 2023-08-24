import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-ability',
  templateUrl: './single-ability.component.html',
  styleUrls: ['./single-ability.component.scss']
})
export class SingleAbilityComponent implements OnInit {
  @Input() ab!: string
  @Input() char!: Character
  constructor() { }

  ngOnInit(): void {
  }

}

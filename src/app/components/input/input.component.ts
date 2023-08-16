import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() color!: string
  @Input() defaultValue!: string
  @Input() disabled: boolean = false
  @Input() type:string = "text"
  @Input() placeholder!: string
  @Input() id!: string
  @Input() name!: string
  constructor() { }

  ngOnInit(): void {
  }

}

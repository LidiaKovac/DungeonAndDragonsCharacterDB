import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-input',
  templateUrl: './bubble-input.component.html',
  styleUrls: ['./bubble-input.component.scss']
})
export class BubbleInputComponent implements OnInit {
  @Input() side!:"left" | 'right'
  @Input() color!: Colors
  @Input() defaultValue!: string
  @Input() disabled: boolean = false
  @Input() type:string = "text"
  @Input() placeholder!: string
  @Input() id!: string
  @Input() name!: string
  @Input() label!:string
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color!: string
  @Input() type:"button" | "submit" | "reset" = 'button'
  @Input() disabled!: boolean
  constructor() { }

  ngOnInit(): void {
  }

}

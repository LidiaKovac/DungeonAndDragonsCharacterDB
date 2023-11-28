import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  open: boolean = false
  selected!: Option
  @Input() options!: Option[];
  @Input() field!: string
  constructor() { }

  ngOnInit(): void {
  }

  setOpen(val:boolean) {
this.open = val
  }

  setSelected(opt:Option) {
    this.selected = opt
  }

  select(opt: Option) {
    this.setSelected(opt); //set selection in this component
    this.setOpen(false); //closes component

  }
}

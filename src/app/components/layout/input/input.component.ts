import { Component, Input, OnInit } from '@angular/core';
import { EditService } from 'src/app/services/edit.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() color!: Colors
  @Input() defaultValue!: string
  @Input() disabled: boolean = false
  @Input() type: string = "text"
  @Input() placeholder!: string
  @Input() id!: string
  @Input() name!: string
  @Input() isForm!: boolean
  @Input() required!: boolean
  edit: boolean = false
  constructor(private editSrv: EditService) {
    this.editSrv.edit.subscribe(res => this.edit = res)
  }

  ngOnInit(): void {
  }

}

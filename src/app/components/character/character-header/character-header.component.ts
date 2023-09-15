import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CharactersService } from 'src/app/services/characters.service';
import { EditService } from 'src/app/services/edit.service';

@Component({
  selector: 'app-character-header',
  templateUrl: './character-header.component.html',
  styleUrls: ['./character-header.component.scss'],
})
export class CharacterHeaderComponent implements OnInit {
  @Input() char!: ApiResp<Character>;
  color!: Colors
  me!: User;
  edit!: boolean

  constructor(private authSrv: AuthService, private editSrv: EditService, private charSrv: CharactersService) {
    //not using switchMap because the subscribtions don't depend on each other
    //TODO: add desubription on destroy
    this.authSrv.me.subscribe((res) => {
      if (res) this.me = res;
    });
    this.editSrv.edit.subscribe(res => this.edit = res)
    this.charSrv.color.subscribe(color => this.color = color)
  }

  ngOnInit(): void { }

  handleSubmit() { }
  setEdit() {
    this.editSrv.toggleEdit()
  }
}

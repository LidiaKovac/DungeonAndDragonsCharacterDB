import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EditService } from 'src/app/services/edit.service';

@Component({
  selector: 'app-character-header',
  templateUrl: './character-header.component.html',
  styleUrls: ['./character-header.component.scss'],
})
export class CharacterHeaderComponent implements OnInit {
  @Input() char!: ApiResp<Character>;
  me!: User;
  constructor(private authSrv: AuthService, private editSrv:EditService) {
    this.authSrv.me.subscribe((res) => {
      if (res) this.me = res;
    });

  }

  ngOnInit(): void { }

  handleSubmit() { }
  setEdit() {
    this.editSrv.toggleEdit()
  }
}

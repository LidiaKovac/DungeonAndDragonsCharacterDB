import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-character-header',
  templateUrl: './character-header.component.html',
  styleUrls: ['./character-header.component.scss'],
})
export class CharacterHeaderComponent implements OnInit {
  @Input() char!: ApiResp<Character>;
  me!: User;
  constructor(private authSrv: AuthService) {
    this.authSrv.me.subscribe((res) => {
      if (res) this.me = res;
    });
  }

  ngOnInit(): void { }

  handleSubmit() { }
}

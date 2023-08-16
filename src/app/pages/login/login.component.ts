import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  cred = {
    email: "",
    password: ""
  }
  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
  }

  handleSubmit(form: NgForm) {
    // ev.preventDefault()
    console.log(form)
    this.authSrv.login(form.value.email, form.value.password).subscribe(res => console.log(res))
  }
}

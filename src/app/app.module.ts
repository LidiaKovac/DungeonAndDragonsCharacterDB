import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { ButtonComponent } from './components/button/button.component';
import { AlertComponent } from './components/alert/alert.component';
import { CharacterHeaderComponent } from './components/character-header/character-header.component';
import { CreateNewButtonComponent } from './components/create-new-button/create-new-button.component';
import { InputComponent } from './components/input/input.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { SelectComponent } from './components/select/select.component';
import { SingleCharComponent } from './components/single-char/single-char.component';
import { StageComponent } from './components/stage/stage.component';
import { HomeComponent } from './pages/landing/home.component';
import { CharacterComponent } from './pages/character/character.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AbilitiesComponent,
    ButtonComponent,
    AlertComponent,
    CharacterHeaderComponent,
    CreateNewButtonComponent,
    InputComponent,
    LoaderComponent,
    ModalComponent,
    NavbarComponent,
    FormComponent,
    SelectComponent,
    SingleCharComponent,
    StageComponent,
    HomeComponent,
    CharacterComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    useClass: TokenInterceptor,
    provide: HTTP_INTERCEPTORS,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

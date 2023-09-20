import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbilitiesComponent } from './components/character/abilities/abilities.component';
import { ButtonComponent } from './components/layout/button/button.component';
import { AlertComponent } from './components/layout/alert/alert.component';
import { CharacterHeaderComponent } from './components/character/character-header/character-header.component';
import { CreateNewButtonComponent } from './components/create-new-button/create-new-button.component';
import { InputComponent } from './components/layout/input/input.component';
import { LoaderComponent } from './components/layout/loader/loader.component';
import { ModalComponent } from './components/layout/modal/modal.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FormComponent } from './components/layout/form/form.component';
import { SelectComponent } from './components/layout/select/select.component';
import { SingleCharComponent } from './components/single-char/single-char.component';
import { StageComponent } from './components/layout/stage/stage.component';
import { HomeComponent } from './pages/landing/home.component';
import { CharacterComponent } from './pages/character/character.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { BubbleInputComponent } from './components/layout/bubble-input/bubble-input.component';
import { SingleAbilityComponent } from './components/character/abilities/single-ability/single-ability.component';
import { SkillsComponent } from './components/character/skills/skills.component';
import { NewComponent } from './pages/new/new.component';
import { FileInputComponent } from './components/layout/file-input/file-input.component';
import { InspoComponent } from './pages/inspo/inspo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
    SignupComponent,
    BubbleInputComponent,
    SingleAbilityComponent,
    SkillsComponent,
    NewComponent,
    FileInputComponent,
    InspoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [{
    useClass: TokenInterceptor,
    provide: HTTP_INTERCEPTORS,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

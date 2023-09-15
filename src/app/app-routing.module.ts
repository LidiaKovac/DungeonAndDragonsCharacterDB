import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/landing/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CharacterComponent } from './pages/character/character.component';
import { NewComponent } from './pages/new/new.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: "char/:id",
    component: CharacterComponent
  },
  {
    path: "new",
    component: NewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/landing/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CharacterComponent } from './pages/character/character.component';
import { NewComponent } from './pages/new/new.component';
import { IsCompleteGuard } from './pages/character/is-complete.guard';
import { InspoComponent } from './pages/inspo/inspo.component';

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
    component: CharacterComponent,
    canActivate: [IsCompleteGuard]
  },
  {
    path: "char/:id/inspo",
    component: InspoComponent,
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

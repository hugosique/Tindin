import { GameDescriptionComponent } from './pages/game-description/game-description.component';
import { LoggedHomePageComponent } from './pages/logged-home-page/logged-home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "login/usr",
    component: LoggedHomePageComponent
  },
  {
    path: "games/:_id",
    component: GameDescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

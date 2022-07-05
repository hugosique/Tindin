import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/template/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './shared/components/template/footer/footer.component';
import { NavComponent } from './shared/components/template/nav/nav.component';
import { GameListComponent } from './shared/components/game-list/game-list.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { HttpClientModule } from '@angular/common/http';
import { LoggedHomePageComponent } from './pages/logged-home-page/logged-home-page.component';
import { GameDescriptionComponent } from './pages/game-description/game-description.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    NavComponent,
    GameListComponent,
    LoginPageComponent,
    LoggedHomePageComponent,
    GameDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

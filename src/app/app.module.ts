import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BallGameModule } from "src/app/ball-game/ball-game.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BallGameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

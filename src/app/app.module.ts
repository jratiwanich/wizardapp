import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchwizardModule } from 'angular-archwizard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArchwizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

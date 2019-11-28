import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeoCommonModule } from '@neo/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NeoCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

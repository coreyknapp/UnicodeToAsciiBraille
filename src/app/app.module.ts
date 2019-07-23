import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnicodeToAsciiComponent } from './unicode-to-ascii/unicode-to-ascii.component';

@NgModule({
  declarations: [
    AppComponent,
    UnicodeToAsciiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {PasswordComponent} from "./components/password.component";

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        NoopAnimationsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

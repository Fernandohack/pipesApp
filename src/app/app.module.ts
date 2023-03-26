import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {AppRouterModule} from "./app-router.module";
import {SalesModule} from "./sales/sales.module";

/* change local of app */
import localEs from '@angular/common/locales/es-BO';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
registerLocaleData(localEs);
registerLocaleData(localFr);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    SalesModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-BO'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

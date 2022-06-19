import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwoAuthComponent } from './components/pages/two-auth/two-auth.component';
import { AuthStep1Component } from './components/organisms/auth-step1/auth-step1.component';
import { AuthStep2Component } from './components/organisms/auth-step2/auth-step2.component';
import { IconStarComponent } from './components/atoms/icon-star/icon-star.component';
import { RatesComponent } from './components/molecules/rates/rates.component';
import { IconNumComponent } from './components/atoms/icon-num/icon-num.component';
import { RateResultComponent } from './components/molecules/rate-result/rate-result.component';
import { ErrorComponent } from './components/organisms/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoAuthComponent,
    AuthStep1Component,
    AuthStep2Component,
    IconStarComponent,
    RatesComponent,
    IconNumComponent,
    RateResultComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

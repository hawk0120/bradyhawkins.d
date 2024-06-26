import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import { GtagModule } from 'angular-gtag';

@NgModule({
		declarations: [AppComponent],
		imports: [BrowserModule, CommonModule,  GtagModule.forRoot({ trackingId: 'G-HB4RVZXJ4N', trackPageviews: true })],
		providers: [],
		bootstrap: [AppComponent]
})

export class AppModule { }


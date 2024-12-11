import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { GtagModule } from 'angular-gtag';
import { HttpClientModule } from '@angular/common/http';
import {GoogleSheetsService} from './stats/google-sheets.service';

@NgModule({
		declarations: [AppComponent],
		imports: [BrowserModule, CommonModule,HttpClientModule, GtagModule.forRoot({ trackingId: 'G-HB4RVZXJ4N', trackPageviews: true })],
		providers: [GoogleSheetsService],
		bootstrap: [AppComponent]
})

export class AppModule { }


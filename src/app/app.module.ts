// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

import { DataService } from './services/data.service';
import { HistoricalComponent } from './components/historical/historical.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HistoricalComponent],
  imports: [
    BrowserModule,
    CommonModule,  // Add CommonModule to the imports array
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
})
export class AppModule { }

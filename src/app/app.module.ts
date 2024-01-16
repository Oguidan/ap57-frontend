// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

import { DataService } from './services/data.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,  // Add CommonModule to the imports array
  ],
  providers: [DataService],
})
export class AppModule { }

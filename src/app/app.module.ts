// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SensorListComponent } from './components/sensor-list/sensor-list.component';
import { SensorMapComponent } from './components/sensor-map/sensor-map.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorListComponent,
    SensorMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
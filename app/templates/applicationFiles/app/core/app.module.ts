import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { routing } from './app.routing';

// app components
import { App } from './app.component';

// app services
//import {appServicesInjectables} from "core/services/services";


@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    App
  ],
  providers: [],
  bootstrap: [ App ]
})
export class AppModule { }

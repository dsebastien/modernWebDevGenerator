"use strict";

import 'reflect-metadata';
import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';
// if (process.env.ENV === 'production') {
//   enableProdMode();
// }
browserDynamicPlatform().bootstrapModule(AppModule);

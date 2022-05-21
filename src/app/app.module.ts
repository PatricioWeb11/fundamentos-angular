import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { FamiliaModule } from './familia/familia.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    FamiliaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

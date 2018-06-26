import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SortClass } from './app.component';
import {MaterialModule} from './material.module';
import {MatIconModule} from '@angular/material/icon';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    SortClass
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MatIconModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [SortClass]
})
export class AppModule { }

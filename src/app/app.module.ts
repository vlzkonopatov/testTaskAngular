import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { AppService } from './app.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { FilterHeaderPipe } from './_pipe/filter-header.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LoaderComponent,
    FilterHeaderPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [AppService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

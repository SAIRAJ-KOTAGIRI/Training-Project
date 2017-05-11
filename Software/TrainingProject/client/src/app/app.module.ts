import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ConfirmOptions, Position} from 'angular2-bootstrap-confirm';
import {Positioning} from 'angular2-bootstrap-confirm/position';
import {ConfirmModule} from 'angular2-bootstrap-confirm';
import { AppComponent } from './app.component';
//import { FirstComponent } from './first/first-component/first-component.component';
import {DataTableModule} from "angular2-datatable";
import { SecondComponent } from './Second/second-component/second-component.component';
import { ThirdComponentComponent } from './third/third-component/third-component.component';
import { FirstComponentComponent } from './First/first-component/first-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    SecondComponent,
    ThirdComponentComponent,
    FirstComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  exports: [
    AppComponent,
    SecondComponent,
    ThirdComponentComponent,
    FirstComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

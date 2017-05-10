import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first-component/first-component.component';
import { SecondComponent } from './Second/second-component/second-component.component';
import { ThirdComponentComponent } from './third/third-component/third-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    SecondComponent,
    ThirdComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

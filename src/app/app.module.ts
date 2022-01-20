import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserformComponent } from './userform/userform.component';
import { FieldComponent } from './field/field.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,UserformComponent,FieldComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

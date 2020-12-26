import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OtherComponent } from './other/other.component';

const appRoutes: Routes = [
  { path: 'other', component: OtherComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HelloComponent, OtherComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

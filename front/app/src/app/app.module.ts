import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents,routingWithProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoritosComponent } from './components/favoritos/favoritos/favoritos.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FavoritosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  
  providers: [routingWithProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }


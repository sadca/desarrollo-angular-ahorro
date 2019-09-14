import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CalculoImagenComponent } from './components/calculo-imagen/calculo-imagen.component';
import { CalculoSimpleComponent } from './components/calculo-simple/calculo-simple.component';
import { CalculoComplejoComponent } from './components/calculo-complejo/calculo-complejo.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CalculoImagenComponent, CalculoSimpleComponent, CalculoComplejoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

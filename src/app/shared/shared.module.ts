import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [BarraNavegacaoComponent, HomeComponent],
  imports: [CommonModule,AppRoutingModule],
  exports: [BarraNavegacaoComponent, HomeComponent]
})
export class SharedModule { }

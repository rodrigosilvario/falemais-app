import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule}   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CriarLigacaoComponent } from './criar-ligacao/criar-ligacao.component';
import { HistoricoLigacaoComponent } from './historico-ligacao/historico-ligacao.component';



@NgModule({
  declarations: [CriarLigacaoComponent, HistoricoLigacaoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LigacaoModule { }

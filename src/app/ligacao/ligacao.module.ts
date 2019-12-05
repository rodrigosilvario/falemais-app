import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule}   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CriarLigacaoComponent } from './criar-ligacao/criar-ligacao.component';



@NgModule({
  declarations: [CriarLigacaoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LigacaoModule { }

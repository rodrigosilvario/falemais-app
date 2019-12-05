import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { CriarLigacaoComponent } from './ligacao/criar-ligacao/criar-ligacao.component';
import { HistoricoLigacaoComponent } from './ligacao/historico-ligacao/historico-ligacao.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'ligacao', component: CriarLigacaoComponent},
  { path: 'historico', component: HistoricoLigacaoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

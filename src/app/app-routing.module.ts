import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { CriarLigacaoComponent } from './ligacao/criar-ligacao/criar-ligacao.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'ligacao', component: CriarLigacaoComponent},
  { path: 'historico', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

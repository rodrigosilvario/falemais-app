import { Component, OnInit } from '@angular/core';
import { LigacaoService } from '../ligacao.service';
import { Ligacao } from '../ligacao';

@Component({
  selector: 'app-historico-ligacao',
  templateUrl: './historico-ligacao.component.html',
  styleUrls: ['./historico-ligacao.component.css']
})
export class HistoricoLigacaoComponent implements OnInit {
  historicoLigacoes: Ligacao[] = [];
  
  constructor(
    private ligacaoService: LigacaoService
  ) { }

  ngOnInit() {
    this.historicoLigacoes = this.ligacaoService.getHistoricoLigacoes();
  }

}

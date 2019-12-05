import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ligacao } from './ligacao';

@Injectable({
  providedIn: 'root'
})
export class LigacaoService {
  historicoLigacoes: Ligacao[] = [];
  
  constructor(
    private http: HttpClient
  ) { }

  getListaCodigo(){
    return this.http.get("/assets/data/codigosDDD.json");
  }

  getListaPlano(){
    return this.http.get("/assets/data/planosFaleMais.json");
  }

  adicionarLigacao(novaLigacao: Ligacao){
    this.historicoLigacoes.push(novaLigacao);
    console.log(this.historicoLigacoes);
  }

}

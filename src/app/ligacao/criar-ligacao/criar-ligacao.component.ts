import { Component, OnInit } from '@angular/core';
import { LigacaoService } from "../ligacao.service"

@Component({
  selector: 'app-criar-ligacao',
  templateUrl: './criar-ligacao.component.html',
  styleUrls: ['./criar-ligacao.component.css']
})
export class CriarLigacaoComponent implements OnInit {
  listaCodigoDestino: any[] = [];
  listaCodigo: any[] = [];
  listaPlano: any[] = [];
  
  constructor(
    private ligacaoService: LigacaoService
    ) {}

  ngOnInit() {
    this.ligacaoService.getListaCodigo().subscribe(
      (res : any[]) => { 
        this.listaCodigo = res;
        this.atualizarListaDestino(this.listaCodigo[0].codigoOrigem);
      }
    );

    this.ligacaoService.getListaPlano().subscribe(
      (res : any[]) => {
        this.listaPlano = res
      }
    );

    
  }

  atualizarListaDestino(evento){
     for(let i = 0; i < this.listaCodigo.length; i++){
       if(this.listaCodigo[i].codigoOrigem === evento ){
        this.listaCodigoDestino = this.listaCodigo[i].codigosDestinos
       }  
     }
  }

  submeterLigacao(criarLigacao){
    console.log(criarLigacao)
  }
        
}

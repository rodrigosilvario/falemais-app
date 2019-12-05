import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LigacaoService } from "../ligacao.service";
import { Ligacao } from "../ligacao";
import { Validators } from '@angular/forms';
import { Validacoes } from './validacoes';


@Component({
  selector: 'app-criar-ligacao',
  templateUrl: './criar-ligacao.component.html',
  styleUrls: ['./criar-ligacao.component.css']
})
export class CriarLigacaoComponent implements OnInit {
  ligacaoForm: FormGroup;
  listaCodigos: any[];
  listaDestinos: any[];
  listaPlanos: any[];
  novaligacao = new Ligacao(0,0,0,'-',0.00,0.00);


  constructor(
    private fb: FormBuilder,
    private ligacaoService: LigacaoService
    ) {}

    onSubmit() {
      this.novaligacao = new Ligacao (
        parseInt(this.ligacaoForm.controls['origem'].value,10),
        parseInt(this.ligacaoForm.controls['destino'].value,10),
        parseInt(this.ligacaoForm.controls['tempo'].value,10),
        this.ligacaoForm.controls['plano'].value
      )
      this.novaligacao.valorSemFaleMais = this.calcularValorSemPlano(this.novaligacao);
      this.novaligacao.valorComFaleMais = this.calcularValorComPlano(this.novaligacao);
      this.ligacaoService.adicionarLigacao(this.novaligacao);
    }
    
  ngOnInit() {
    this.criarFormularioDeLigacao()
    this.ligacaoService.getListaCodigo().subscribe(
      (res : any[]) => { 
        this.listaCodigos = res;
        this.atualizarListaDestino(this.listaCodigos[0].codigoOrigem);
        this.ligacaoForm.patchValue({
          origem: this.listaCodigos[0].codigoOrigem,
        })
      }
    );
    this.ligacaoService.getListaPlano().subscribe(
      (res : any[]) => {
        this.listaPlanos = res
        this.ligacaoForm.patchValue({
          plano: this.listaPlanos[0].nomePlano,
        })
      }
    );

    
  }

  criarFormularioDeLigacao(){
    this.ligacaoForm = this.fb.group({
      origem: new FormControl(''),
      destino: new FormControl(''),
      tempo: new FormControl('', Validators.compose([Validators.required,Validacoes.MaiorQueZero])),
      plano: new FormControl('')
    });
  }

  get tempo() {
    return this.ligacaoForm.get('tempo');
  }

  atualizarListaDestino(evento){
    for(let i = 0; i < this.listaCodigos.length; i++){
        if(this.listaCodigos[i].codigoOrigem === evento ){
          this.listaDestinos = this.listaCodigos[i].codigosDestinos
        }  
    }
    this.ligacaoForm.patchValue({
      destino: this.listaDestinos[0].codigoDestino
    })
  }

  buscarValorPorMinuto(origem, destino) {
    for(let i = 0; i < this.listaCodigos.length; i++){
      if(origem == this.listaCodigos[i].codigoOrigem){
        for(let y = 0; y < this.listaCodigos[i].codigosDestinos.length; y++){
            if(destino == this.listaCodigos[i].codigosDestinos[y].codigoDestino){
              return this.listaCodigos[i].codigosDestinos[y].tarifaMinuto
            }
        }
      }
    }
  }

  calcularValorSemPlano(novaLigacao: Ligacao){
    var valor = novaLigacao.tempo * this.buscarValorPorMinuto(novaLigacao.origem, novaLigacao.destino);
    return valor.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  calcularValorComPlano (novaLigacao: Ligacao){
    for(let i = 0; i < this.listaPlanos.length; i++){
      if(novaLigacao.plano == this.listaPlanos[i].nomePlano){
        if(novaLigacao.tempo > this.listaPlanos[i].quantidadeMinutos){
          const valor = (novaLigacao.tempo - this.listaPlanos[i].quantidadeMinutos) * (this.buscarValorPorMinuto(novaLigacao.origem, novaLigacao.destino) * 1.10);
          return valor.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        } else 
          return this.valorZeroFormatado();
      }
    }
  }

  valorZeroFormatado(){
    let valor: number = 0;
    return valor.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }
}

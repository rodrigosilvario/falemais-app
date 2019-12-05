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
  
  destinos: number[] = [11,16,17,18];
  planos = ['FaleMais 30', 'FaleMais 60','FaleMais 120'];


  constructor(
    private fb: FormBuilder,
    private ligacaoService: LigacaoService
    ) {}

    onSubmit() {
      const novaligacao = new Ligacao (
        parseInt(this.ligacaoForm.controls['origem'].value,10),
        parseInt(this.ligacaoForm.controls['destino'].value,10),
        parseInt(this.ligacaoForm.controls['tempo'].value,10),
        this.ligacaoForm.controls['plano'].value
      )
      console.log(novaligacao);
    }
    
  ngOnInit() {
    this.criarFormularioDeLigacao()
    this.ligacaoService.getListaCodigo().subscribe(
      (res : any[]) => { 
        this.listaCodigos = res;
        this.atualizarListaDestino(this.listaCodigos[0].codigoOrigem);
        this.ligacaoForm.patchValue({
          origem: this.listaCodigos[0].codigoOrigem
        })
      }
    );
  //  this.ligacaoService.getListaPlano().subscribe(
   //   (res : any[]) => {
     //   this.listaPlano = res
    //  }
   // );

    
  }

  criarFormularioDeLigacao(){
    this.ligacaoForm = this.fb.group({
      origem: new FormControl(''),
      destino: new FormControl(''),
      tempo: new FormControl('', Validators.compose([Validators.required,Validacoes.MaiorQueZero])),
      plano: new FormControl(this.planos[0])
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
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LigacaoService {
  
  constructor(
    private http: HttpClient
  ) { }

  getListaCodigo(){
    return this.http.get("/assets/data/codigosDDD.json");
  }

  getListaPlano(){
    return this.http.get("/assets/data/planosFaleMais.json");
  }

}

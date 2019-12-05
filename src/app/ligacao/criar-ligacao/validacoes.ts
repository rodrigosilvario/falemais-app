import { AbstractControl } from '@angular/forms';

export class Validacoes {
    
    static MaiorQueZero(controle: AbstractControl) {
        const tempo = controle.value;
        if(tempo > 0) 
            return null;
        return {'menorQueZero' : true};
    }
}

import { Injectable } from '@angular/core';
import { SexoInterface } from '../sexo.interface';
import { SEXOS } from '../mock/mock-sexo';




@Injectable()
export class SexoService {

sexos : SexoInterface[] ;

constructor() {
    this.sexos=SEXOS;
  }
  
  public getSexos() : SexoInterface[]{
    return this.sexos;
  }
}

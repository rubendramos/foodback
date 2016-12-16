import { Injectable } from '@angular/core';
import { ChildService} from './models/child/service/child.service';
import { SexoService } from './models/sexo/service/sexo.service';
import { Sexo } from './models/sexo/sexo';

@Injectable()
export class ModelService {

    
    constructor(private childService : ChildService, private sexoService : SexoService) {};

    public getSexos(): Sexo[] {
        return this.sexoService.getSexos();
    }
    

}

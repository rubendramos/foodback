import { FormInterface } from '../formularios/fields/form.interface';
import { BasicField } from '../formularios/fields/basic-field';
import { BasicPage } from '../formularios/fields/basic-page';
import { Sexo } from './sexo';
import { SexoService } from '../services/sexo.service';
import { ComponentInterface } from '../formularios/fields/component.interface';
import { ElementInterface } from '../formularios/fields/element.interface';
import { Inject } from '@angular/core';


import { DropdownField } from '../formularios/fields/dropdown-field';
import { TextboxField } from '../formularios/fields/textbox-field';
import { DateField } from '../formularios/fields/Date-field';
import { IntegerField } from '../formularios/fields/integer-field';


export class SexoForm  {
    id: number;
    name: string;

    elements: ElementInterface[];
    fkElements: ElementInterface;
                              
    constructor(@Inject(SexoService)sexoService : SexoService){
        this.elements = sexoService.getElements();
        this.fkElements = sexoService.getFkElement();
    }

getElements(): ElementInterface[] {
        return this.elements;
}

getFkComponent(): ElementInterface {
        return this.fkElements;
}

   

  
}
import { Injectable } from '@angular/core';
import { Sexo } from '../interfaces/sexo.interface';
import { SEXOS } from '../model/mock-sexo';
import { Option } from '../model/option';
import { SexoForm } from '../model/sexoForm';

import { DropdownField } from '../formularios/fields/dropdown-field';
import { BasicField } from '../formularios/fields/basic-field';
import { TextboxField } from '../formularios/fields/textbox-field';
import { DateField } from '../formularios/fields/Date-field';
import { IntegerField } from '../formularios/fields/integer-field';
import { ActionInterface } from '../formularios/fields/action.interface';
import { BasicAction } from '../formularios/fields/basic-action';

import { ComponentInterface } from '../formularios/fields/component.interface';
import { ElementInterface } from '../formularios/fields/element.interface';
import {BasicComponent} from '../formularios/fields/basic-component';
import {ValidationInterface} from '../formularios/fields/validations/validation.interface';
import {FactoryValidation} from '../formularios/fields/validations/factory-validation';




@Injectable()
export class SexoService {

sexos : Sexo[] ;
fkElement: ElementInterface;
elements: ElementInterface[];
actions : ActionInterface[];  

component : ComponentInterface;
  constructor() {
    this.sexos=SEXOS;
  }
  
  getSexos() : Sexo[]{
    return this.sexos;
  }
 

  getOptions() : Option[] {
         let options : Option[] = [];
         for (let sexo of this.sexos){
             options.push(new Option(sexo.id,sexo.name));
         }
         return options;
  }

getElements(): ElementInterface[] {
    this.elements = [new TextboxField( {
                            key: 'name',
                            label: 'Nome',
                            value: '',
                            validations: [FactoryValidation.getRequiredValidation(),FactoryValidation.getMinLengthValidation(5), FactoryValidation.getPatternValidation('123')],
                            order: 2
                            }),
                            new IntegerField( {
                            key: 'id',
                            label: 'ID',
                            type: 'integer',
                            validations: [FactoryValidation.getRequiredValidation(),FactoryValidation.getMinLengthValidation(5), FactoryValidation.getMaxLengthValidation(5)],
                            required: true,
                            order: 1
                            })
                            ];
     
        return this.elements.sort(( a, b ) => a.order - b.order )
    }

getFkElement(): ElementInterface {
    return this.fkElement =  new DropdownField({
    key: 'Sex',
    label: 'Sexo',
    options: this.getOptions(),
    required: true,
    order : 4
  }); ;
}

getActions() : ActionInterface[]{
        this.actions = [new BasicAction({key:'save', label:'gardar', order:3, controlType:'componente'}),
                        new BasicAction({key:'delete', label:'borrar', order:2, controlType:'componente'}),
                        new BasicAction({key:'edit', label:'editar', order:1, controlType:'componente'})]
        return this.actions.sort(( a, b ) => a.order - b.order )
    }


getComponent() : ComponentInterface{
    let sexoComponent = new BasicComponent("Sexo",1);
    sexoComponent.setElements(this.getElements());
    sexoComponent.setActions(this.getActions());
    return this.component = sexoComponent;
}
  
}
